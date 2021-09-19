import axios from 'axios';

export const GET_EXPENSES_REQUEST = 'GET_EXPENSES_REQUEST';
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS';
export const GET_EXPENSES_FAILED = 'GET_EXPENSES_FAILED';
export const RESET = 'RESET';

export function getExpenses() {
  return function (dispatch) {
    dispatch({
      type: GET_EXPENSES_REQUEST,
    });
    axios.get(`http://localhost:3000/expenses`).then((res) => {
      if (res) {
        console.log(res);
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
//
// export function getBooksInfo(isbn) {
//   return function (dispatch) {
//     dispatch({
//       type: GET_ITEMS_REQUEST,
//     });
//     Promise.all(
//       isbn.map((item) => axios.get(`https://openlibrary.org/isbn/${item}.json`))
//     ).then((res) => {
//       if (res) {
//         const booksInfo = [];
//         isbn.forEach((item, i) => {
//           booksInfo.push({
//             date: res[i].data.publish_date,
//             isbn: item,
//             title: res[i].data.title,
//           });
//         });
//         dispatch({
//           type: GET_ITEMS_SUCCESS,
//           allBooksInfo: booksInfo,
//         });
//       } else {
//         dispatch({
//           type: GET_ITEMS_FAILED,
//         });
//       }
//     });
//   };
// }
