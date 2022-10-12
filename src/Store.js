import { createStore } from "redux";
import rootReducer from "./reducer/index";

// let store = createStore(persistedReducer, applyMiddleware(thunk));
// let persistor = persistStore(store);

export default createStore(rootReducer);
