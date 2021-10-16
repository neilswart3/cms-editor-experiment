// import {
//   GenresActions,
//   GenresState,
//   genresTypes,
// } from 'src/store/actions/genres/types'

// const initialState: GenresState = {
//   data: [],
//   error: null,
//   loading: false,
// }

// const genresReducer = (
//   state = initialState,
//   action: GenresActions
// ): GenresState => {
//   switch (action.type) {
//     case genresTypes.FETCH_GENRES_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       }
//     case genresTypes.FETCH_GENRES_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload.data,
//       }
//     case genresTypes.FETCH_GENRES_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//       }
//     default:
//       return {
//         ...state,
//       }
//   }
// }

// export { genresReducer }
