import { Dimensions } from "react-native";

import {
    OPENCASESLIST
} from "./../constants/constant";

let defaultState = {
    openCasesCount : 10,
    any : 25,
    dataFromApi : [],
    openCases : []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case OPENCASESLIST:
            return Object.assign({}, state, { openCases  : action.data});
        default:
            return state;
    }
};
