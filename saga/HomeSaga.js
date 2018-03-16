import {
    call,
    put,
    takeEvery,
    takeLatest,
    select
} from 'redux-saga/effects';
import {
    Alert
} from "react-native";
import {
    fetchData
} from "../utils/utils";
import {
    updateData
} from "./../action/action"

import {
    CONSTANT1
} from "./../constants/constant"
import {getRandomContacts} from "../api/uinames";

function* fetchGymData(){
    try {
        let credentials = yield select();

        /*let headers = {
            authorization : credentials.signInReducer.token,
            centerId : credentials.signInReducer.centerId
        };*/
        let response = yield call( getRandomContacts, "This is API"); // Here headers is optional
        console.log("response", response);
        yield put(updateData(response));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

const mySaga = [
    takeLatest( CONSTANT1 , fetchGymData)
];

export default mySaga;

