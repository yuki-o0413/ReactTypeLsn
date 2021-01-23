import { createStore as reduxCreateStore, combineReducers } from "redux";
import { id, name } from "./reducers";

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            id,
            name
        })
    );
    return store;
}

