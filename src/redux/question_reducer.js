import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const questionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers : {
        startExamAction : (state, action) => {
            let { question, answers} = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    }
})

export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = questionReducer.actions;

export default questionReducer.reducer;




// const START_EXAM = 'START_EXAM';
// const MOVE_NEXT = 'MOVE_NEXT';
// const MOVE_PREV = 'MOVE_PREV';
// const RESET_ALL = 'RESET_ALL';

// export function startExamAction(payload) {
//   return {
//     type: START_EXAM,
//     payload
//   };
// }

// export function moveNextAction() {
//   return { type: MOVE_NEXT };
// }

// export function movePrevAction() {
//   return { type: MOVE_PREV };
// }

// export function resetAllAction() {
//   return { type: RESET_ALL };
// }

// const initialState = {
//   questions: [],
//   answers: [],
//   queue: [],
//   trace: 0
// };

// export default function questionReducer(state = initialState, action) {
//   switch (action.type) {
//     case START_EXAM: {
//       const { question, answers } = action.payload;
//       return {
//         ...state,
//         questions: question,
//         answers: answers,
//         queue: [0],
//         trace: 0
//       };
//     }
//     case MOVE_NEXT: {
//       return {
//         ...state,
//         trace: state.trace + 1,
//         queue: state.queue.concat([state.trace + 1])
//       };
//     }
//     case MOVE_PREV: {
//       return {
//         ...state,
//         trace: state.trace - 1
//       };
//     }
//     case RESET_ALL: {
//       return {
//         ...state,
//         questions: [],
//         answers: [],
//         queue: [],
//         trace: 0
//       };
//     }
//     default:
//       return state;
//   }
// }
