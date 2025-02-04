import { createAction, handleActions } from "redux-actions";

const CHANGE_2REM = 'font/CHANGE_2REM'
const INPUT_FONTSIZE = 'font/INPUT'

export const change_2rem = createAction(CHANGE_2REM)
export const input_fontSize = createAction(INPUT_FONTSIZE)

const initialState = {
  fontSize: "1rem",
  inputFontSize : "2rem"
};

const font = handleActions({
  [CHANGE_2REM]: (state, action) => ({ fontSize : "3rem" }),
  [INPUT_FONTSIZE]: (state, action) => ({ inputFontSize : state.inputFontSize, inputFontSize : action.payload }),
}, initialState)

export default font;