import { Dimensions } from "react-native";

import {
    CONSTANT1,
    UPDATEDATA
} from "./../constants/constant";

let reducer = {
    thisIsDefault : 10,
    any : 25,
    dataFromApi : []
};

export default (state = reducer, action) => {
    switch (action.type) {
        case CONSTANT1:
            return Object.assign({}, state, { thisIsDefault : 12});
        case UPDATEDATA:
            return Object.assign({}, state, { dataFromApi : action.data});
        default:
            return state;
    }
};