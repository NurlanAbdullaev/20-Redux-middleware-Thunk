import { applyMiddleware, combineReducers, createStore } from "redux";
import { mealReducer } from "./meals/mealsReducer";
import { basketReducer } from "./basket/basketReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  meals: mealReducer,
  basket: basketReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
