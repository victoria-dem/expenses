import {
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAILED,
  ADD_EXPENSES_REQUEST,
  ADD_EXPENSES_SUCCESS,
  ADD_EXPENSES_FAILED,
  RESET,
} from '../actions/expenses';

const initialState = {
  expenses: [],
  expensesRequest: false,
  expensesFailed: false,
  addExpenseRequest: false,
  addExpenseFailed: false,
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

    case ADD_EXPENSES_REQUEST: {
      return {
        ...state,
        addExpensesRequest: true,
      };
    }
    case ADD_EXPENSES_SUCCESS: {
      return {
        ...state,
        addExpensesFailed: false,
        expenses: [...state.expenses, action.expense],
        addExpensesRequest: false,
      };
    }
    case ADD_EXPENSES_FAILED: {
      return { ...state, addExpensesFailed: true, addExpensesRequest: false };
    }
    default: {
      return state;
    }
  }
};