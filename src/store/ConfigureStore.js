import { combineReducers, createStore } from "redux";
import eventReducer from "../features/events/EventReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import modalReducer from "../common/modals/modalReducer";
import authReducer from "../auth/AuthReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  modals: modalReducer,
  auth: authReducer,
});

export const configureStore = () => {
  return createStore(rootReducer, devToolsEnhancer());
};
