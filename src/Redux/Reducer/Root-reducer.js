import { combineReducers } from "redux";
import { LikeReducer } from "./Like-reducer";
import { CommentReducer } from "./Comments-reducer";


export const rootReducer=combineReducers({
  LikeReducer  ,
  CommentReducer
})