import * as firebase from 'firebase';
import FireBaseTools from './firebase-tools'


export function getStoreCases() {
  console.log('-------------R A K E S H--------------------')
  const dbRef = firebase.database().ref().child('roles/store/liveCases');
  return dbRef.once('value');
}
