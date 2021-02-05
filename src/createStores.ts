import { createStore as reduxCreateStore, combineReducers } from "redux";
import { IdState, NameState, id, name } from "./reducers";

// State の型。redux ではアプリケーションが持つ状態を一元管理するが、そのすべての状態をまとめた型 ApplicationState が欲しいため、まず reducers.ts で部分状態である id と name の型をそれぞれ IdState, NameState と定義して、createStores.ts でそれらをまとめて ApplicationState を定義

interface ApplicationState {
    id: IdState,
    name: NameState
}

export function getIdState(state: ApplicationState): IdState {
    return state.id;
}

export function getNameState(state: ApplicationState): NameState {
    return state.name;
}

export default function createStore() {
    const store = reduxCreateStore(
        combineReducers({
            id,
            name
        })
    );
    return store;
}

