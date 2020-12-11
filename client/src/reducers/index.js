import {
    FETCHING_SMURF_START,
    FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE,
    POSTING_SMURF_START,
    POSTING_SMURF_FAILURE,
    ONCHANGE,
    CLEAR_FORM,
  } from "./../actions/index";
  
  const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: "",
    form: {
      name: "",
      height: "",
      age: "",
    },
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURF_START:
        return {
          ...state,
          isFetching: true,
        };
      case FETCHING_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
        };
      case FETCHING_SMURF_FAILURE:
        return {
          ...state,
          error: action.payload,
          isFetching: false,
        };
      case POSTING_SMURF_START:
        return {
          ...state,
          isPosting: true,
        };
      case POSTING_SMURF_FAILURE:
        return {
          ...state,
          error: action.payload,
          isPosting: false,
        };
      case ONCHANGE:
        return {
          ...state,
          form: {
            ...state.form,
            [action.payload.target.name]: action.payload.target.value,
          },
        };
      case CLEAR_FORM:
        return {
          ...state,
          form: initialState.form,
        };
      default:
        return state;
    }
  };

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary