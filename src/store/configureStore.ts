import {createStore} from "redux";
import {rootReducer} from "./AppState";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const configureStore = () => {
  return createStore(rootReducer, {});
};

export default configureStore;