
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { blogReducer } from "../reducers/blogReducer";
import { productReducer } from "../reducers/productReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            br: blogReducer,
            pr: productReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

export default configureStore;
