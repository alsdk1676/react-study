import { createAction, handleActions } from 'redux-actions'

// type 생성 
const INCREASE = "count/INCREASE"
const DECREASE = "count/DECREASE"

// action 생성 (외부 component에서 사용하기 때문에 export로 내보내기)
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

// state 초기화
const initialState = {
  number : 0
}

// reducer 제작
const count = handleActions({
  [INCREASE] : (state, action) => ({ number : state.number  + parseInt(action.payload) }), 
  [DECREASE] : (state, action) => ({ number : state.number - parseInt(action.payload) }), 
}, initialState)

export default count;




















// const font = handleActions({
//   [CHANGE_2REM]: (state) => ({...state,fontSize: '3rem',}),
//   },initialState);

// export default font;

