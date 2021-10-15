export const MAKE_REQUEST = 'MAKE_REQUEST';
export const MAKE_REQUEST_SUCCESS = 'MAKE_REQUEST_SUCCESS';
export const MAKE_REQUEST_ERROR = 'MAKE_REQUEST_ERROR';

const initialState = {
  items: [],
  error: '',
};

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

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MAKE_REQUEST_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload],
        error: null,
      };
    case MAKE_REQUEST_ERROR:
      return {
        ...state,
        error: 'There was an error in the request',
      };
    default:
      return state;
  }
};

// export default reducer;
