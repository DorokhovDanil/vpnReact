<<<<<<< HEAD
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
=======
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
>>>>>>> 0c7f618 (загрузил шрифты прямо в проект, добавил импорты, где выдавало ошибки, задал несколько дефолтных значений в mainAction.js)
