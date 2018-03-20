import * as firebase from 'firebase';
import FireBaseTools from './firebase-tools'


export function getStoreCases() {
  const dbRef = firebase.database().ref().child('roles/store/openCases');
  return dbRef.once('value').then(snap => snap.val());
}
