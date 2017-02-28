import { FETCH_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import getPeople from './api'
//
// export function getData() {
//   return {
//     type: FETCHING_DATA
//   }
// }
//
// export function getDataSuccess(data) {
//   return {
//     type: FETCHING_DATA_SUCCESS,
//     data,
//   }
// }
//
// export function getDataFailure() {
//   return {
//     type: FETCHING_DATA_FAILURE
//   }
// }

export function fetchData() {
  return {
    type: FETCH_DATA,
    payload: getPeople()
  }
}
