import {
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAILED,
  RESET,
} from '../actions/expenses';

const initialState = {
  expenses: [],
  expensesRequest: false,
  expensesFailed: false,
};

export const expenses = (state = initialState, action) => {
  switch (action.type) {
    case RESET: {
      return initialState;
    }
    case GET_EXPENSES_REQUEST: {
      return {
        ...state,
        expensesRequest: true,
      };
    }
    case GET_EXPENSES_SUCCESS: {
      return {
        ...state,
        expensesFailed: false,
        expenses: action.expenses,
        expensesRequest: false,
      };
    }
    case GET_EXPENSES_FAILED: {
      return { ...state, expensesFailed: true, expensesRequest: false };
    }
    default: {
      return state;
    }
  }
};
