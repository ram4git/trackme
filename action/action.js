import {
    CONSTANT1,
    UPDATEDATA
} from "./../constants/constant";

export const action1 = (data) => {
    return {
        type : CONSTANT1
    }
}

export const action2 = () => {
    return {
        type : CONSTANT1
    }
}

export const updateData = (data) => {
    return {
        type : UPDATEDATA,
        data
    }
}