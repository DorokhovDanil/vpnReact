import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import userReduser from "./userReducer";
import subReducer from "./subReducer";
//корневой редюсер
const rootReducer = combineReducers({
  user: userReduser,
  subscription: subReducer
});

//создание стора
export const store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk))
);
