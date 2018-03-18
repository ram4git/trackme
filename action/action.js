import {
  GETALLOPENCASES, OPENCASESLIST
} from "./../constants/constant";

export const getAllOpenCases = (data) => {
  return {
    type : GETALLOPENCASES,
    data : data
  }
}

export const openCasesList = (data) => {
  return {
    type : OPENCASESLIST,
    data : data
  }
}
