import {
    CONSTANT1,
    UPDATEDATA,
    ALLLIVECASES
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

export const getAllLiveCases = (data) => {
  return {
    type : ALLLIVECASES,
    data : data
  }
}
