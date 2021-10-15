import axios from 'axios';

export const GET_EXPENSES_REQUEST = 'GET_EXPENSES_REQUEST';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAILED = 'GET_EXPENSES_FAILED';
export const ADD_EXPENSES_REQUEST = 'ADD_EXPENSES_REQUEST';
export const ADD_EXPENSES_SUCCESS = 'ADD_EXPENSES_SUCCESS';
export const ADD_EXPENSES_FAILED = 'ADD_EXPENSES_FAILED';
export const EDIT_EXPENSE_REQUEST = 'EDIT_EXPENSE_REQUEST';
export const EDIT_EXPENSE_SUCCESS = 'EDIT_EXPENSE_SUCCESS';
export const EDIT_EXPENSE_FAILED = 'EDIT_EXPENSE_FAILED';
export const DELETE_EXPENSE_REQUEST = 'DELETE_EXPENSE_REQUEST';
export const DELETE_EXPENSE_SUCCESS = 'DELETE_EXPENSE_SUCCESS';
export const DELETE_EXPENSE_FAILED = 'DELETE_EXPENSE_FAILED';
export const RESET = 'RESET';
export const MAKE_REQUEST = 'MAKE_REQUEST';
export const MAKE_REQUEST_SUCCESS = 'MAKE_REQUEST_SUCCESS';
export const MAKE_REQUEST_ERROR = 'MAKE_REQUEST_ERROR';

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

export function editExpense(expense, expenseId) {
  return function (dispatch) {
    dispatch({
      type: EDIT_EXPENSE_REQUEST,
    });
    axios
      .put(`http://localhost:3000/expenses/${expenseId}`, expense)
      .then((res) => {
        if (res && res.statusText === 'OK') {
          dispatch({
            type: EDIT_EXPENSE_SUCCESS,
            expense: res.data.data,
          });
        } else {
          dispatch({
            type: EDIT_EXPENSE_FAILED,
          });
        }
      });
  };
}

export function deleteExpense(expenseId) {
  return function (dispatch) {
    dispatch({
      type: DELETE_EXPENSE_REQUEST,
    });
    axios.delete(`http://localhost:3000/expenses/${expenseId}`).then((res) => {
      if (res && res.statusText === 'OK') {
        dispatch({
          type: DELETE_EXPENSE_SUCCESS,
          expense: res.data.data,
        });
      } else {
        dispatch({
          type: DELETE_EXPENSE_FAILED,
        });
      }
    });
  };
}

export const makeRequest = (id) => ({
  type: MAKE_REQUEST,
  payload: id,
});

export const makeRequestSuccess = (data) => ({
  type: MAKE_REQUEST_SUCCESS,
  payload: data,
});

export const makeRequestError = (error) => ({
  type: MAKE_REQUEST_ERROR,
  meta: { error },
});
