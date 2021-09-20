import axios from 'axios';

export const GET_EXPENSES_REQUEST = 'GET_EXPENSES_REQUEST';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAILED = 'GET_EXPENSES_FAILED';
export const ADD_EXPENSES_REQUEST = 'ADD_EXPENSES_REQUEST';
export const ADD_EXPENSES_SUCCESS = 'ADD_EXPENSES_SUCCESS';
export const ADD_EXPENSES_FAILED = 'ADD_EXPENSES_FAILED';
export const RESET = 'RESET';

export function getExpenses() {
  return function (dispatch) {
    dispatch({
      type: GET_EXPENSES_REQUEST,
    });
    axios.get(`http://localhost:3000/expenses`).then((res) => {
      if (res) {
        dispatch({
          type: GET_EXPENSES_SUCCESS,
          expenses: res.data.expenses,
        });
      } else {
        dispatch({
          type: GET_EXPENSES_FAILED,
        });
      }
    });
  };
}

export function addExpense(expense) {
  return function (dispatch) {
    dispatch({
      type: ADD_EXPENSES_REQUEST,
    });
    axios.post(`http://localhost:3000/expenses`, expense).then((res) => {
      if (res && res.statusText === 'OK') {
        console.log('res', res);
        dispatch({
          type: ADD_EXPENSES_SUCCESS,
          expense: res.data.data,
        });
      } else {
        dispatch({
          type: ADD_EXPENSES_FAILED,
        });
      }
    });
  };
}
