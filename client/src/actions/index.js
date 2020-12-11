import axios from "axios";

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";
export const POSTING_SMURF_START = "POSTING_SMURF_START";
export const POSTING_SMURF_SUCCESS = "POSTING_SMURF_SUCCESS";
export const POSTING_SMURF_FAILURE = "POSTING_SMURF_FAILURE";
export const ONCHANGE = "ONCHANGE";
export const CLEAR_FORM = "CLEAR_FORM";

export function getSmurf() {
  return (dispatch) => {
    dispatch(startFetch());
    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
        dispatch(fetchSuccess(res.data));
        console.log(res.data);
    })
    .catch((err) => {
        dispatch(fetchFailure(err.message));
    });
    debugger;
};
}

export function postSmurfs(smurf) {
  return (dispatch) => {
    dispatch(startPost());
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log("Post Successfull ==> ", res);
      })
      .catch((err) => {
        dispatch(postFailure(err.meesage));
      });
  };
}

export function clearForm() {
  return { type: CLEAR_FORM };
}

export function onChange(e) {
  return { type: ONCHANGE, payload: e };
}

function startFetch() {
  return { type: FETCHING_SMURF_START };
}

function fetchSuccess(payload) {
  return { type: FETCHING_SMURF_SUCCESS, payload: payload };
}

function fetchFailure(payload) {
  return { type: FETCHING_SMURF_FAILURE, payload: payload };
}

function startPost() {
  return { type: POSTING_SMURF_START };
}

function postFailure(payload) {
  return { type: POSTING_SMURF_FAILURE, payload: payload };
}