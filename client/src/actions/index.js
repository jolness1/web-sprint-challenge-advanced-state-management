import axios from "axios";


export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const ADD_SMURF ="ADD_SMURF"
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const SMURF_BAD_DATA = "SMURF_BAD_DATA"

export const  getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START});
    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({ type: FETCHING_SMURF_FAILURE, payload: err});
    });
};


export const postSmurf = (smurf) => dispatch => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        dispatch ({ type: ADD_SMURF, paylaod: smurf});
      })
      .catch((err) => dispatch ({
        type:FETCHING_SMURF_FAILURE, payload: err
      }));
    }
export const setErrorMessage = (error) => {
    return({type: SMURF_BAD_DATA, payload: error})
}