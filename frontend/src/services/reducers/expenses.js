import {
  GET_EXPENSES_REQUEST,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_FAILED,
  ADD_EXPENSES_REQUEST,
  ADD_EXPENSES_SUCCESS,
  ADD_EXPENSES_FAILED,
  EDIT_EXPENSE_REQUEST,
  EDIT_EXPENSE_SUCCESS,
  EDIT_EXPENSE_FAILED,
  DELETE_EXPENSE_REQUEST,
  DELETE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_FAILED,
  RESET,
} from '../actions/expenses';

const initialState = {
  expenses: [],
  expensesRequest: false,
  expensesFailed: false,
  addExpenseRequest: false,
  addExpenseFailed: false,
  editExpenseRequest: false,
  editExpenseFailed: false,
  deleteExpenseRequest: false,
  deleteExpenseFailed: false,
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

    case EDIT_EXPENSE_REQUEST: {
      return {
        ...state,
        editExpenseRequest: true,
      };
    }
    case EDIT_EXPENSE_SUCCESS: {
      return {
        ...state,
        expenses: state.expenses.map((expense) => {
          if (expense._id !== action.expense._id) {
            return expense;
          }
          return { ...expense, ...action.expense };
        }),
      };
    }
    case EDIT_EXPENSE_FAILED: {
      return { ...state, editExpenseFailed: true, editExpenseRequest: false };
    }

    case DELETE_EXPENSE_REQUEST: {
      return {
        ...state,
        deleteExpenseRequest: true,
      };
    }
    case DELETE_EXPENSE_SUCCESS: {
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense._id !== action.expense._id
        ),
      };
    }
    case DELETE_EXPENSE_FAILED: {
      return {
        ...state,
        deleteExpenseFailed: true,
        deleteExpenseRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
