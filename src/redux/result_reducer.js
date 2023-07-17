import { createSlice } from "@reduxjs/toolkit"

export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        userId : null,
        result : []
    },
    reducers : {
        setUserId : (state, action) => {
            state.userId = action.payload
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload)
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1)
        },
        resetResultAction : () => {
            return {
                userId : null,
                result : []
            }
        }
    }
})

export const { setUserId, pushResultAction, resetResultAction, updateResultAction } = resultReducer.actions;

export default resultReducer.reducer;

// const SET_USER_ID = 'SET_USER_ID';
// const PUSH_RESULT = 'PUSH_RESULT';
// const UPDATE_RESULT = 'UPDATE_RESULT';
// const RESET_RESULT = 'RESET_RESULT';

// export function setUserId(userId) {
//   return {
//     type: SET_USER_ID,
//     payload: userId
//   };
// }

// export function pushResultAction(result) {
//   return {
//     type: PUSH_RESULT,
//     payload: result
//   };
// }

// export function updateResultAction(index) {
//   return {
//     type: UPDATE_RESULT,
//     payload: index
//   };
// }

// export function resetResultAction() {
//   return { type: RESET_RESULT };
// }

// const initialState = {
//   userId: '',
//   result: []
// };

// export default function resultReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_USER_ID: {
//       return {
//         ...state,
//         userId: action.payload
//       };
//     }
//     case PUSH_RESULT: {
//       return {
//         ...state,
//         result: [...state.result, action.payload]
//       };
//     }
//     case UPDATE_RESULT: {
//       const { payload } = action;
//       const updatedResult = [...state.result];
//       updatedResult[payload.index] = payload.value;
//       return {
//         ...state,
//         result: updatedResult
//       };
//     }
//     case RESET_RESULT: {
//       return {
//         ...state,
//         result: []
//       };
//     }
//     default:
//       return state;
//   }
// }
