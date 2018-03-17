import { Dimensions } from "react-native";

import {
    CONSTANT1,
    UPDATEDATA,
    ALLLIVECASES
} from "./../constants/constant";

let defaultState = {
    liveCasesCount : 10,
    any : 25,
    dataFromApi : []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case CONSTANT1:
            return Object.assign({}, state, { liveCasesCount : 12});
        case UPDATEDATA:
            return Object.assign({}, state, { dataFromApi : action.data});
        case ALLLIVECASES:
            return Object.assign({}, state, { allLiveCases : action.data});
        default:
            return state;
    }
};
