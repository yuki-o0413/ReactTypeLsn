'use strict';
import { ActionType } from './actions';


// action を ActionType 型としていますが、union 型の性質によって、case 'UPDATE_ID': や case 'UPDATE_NAME': の中では payload の型としてそれぞれ適切なものが選択され、action.payload.id や action.payload.name に安全にアクセスできる

// connect (mapStateToProps や mapDispatchToProps) のことは忘れて、Hooks 関数 (useSelector および useDispatch) を使うのがお勧め

// State の型。redux ではアプリケーションが持つ状態を一元管理するが、そのすべての状態をまとめた型 ApplicationState が欲しいため、まず reducers.ts で部分状態である id と name の型をそれぞれ IdState, NameState と定義して、createStores.ts でそれらをまとめて ApplicationState を定義

export type IdState = string;

const initialStateId = ""
export function id(state = initialStateId, action: ActionType) {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE_ID':
            newState = action.payload.id;
            break;
        default:
            return state;
    }
    console.log(newState)
    return newState;
};

export type NameState = string;

const initialStateName = ""
export function name(state = initialStateName, action:ActionType) {
    console.log(action);
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'UPDATE_NAME':
            newState = action.payload.name;
            break;
        default:
            return state;
    }
    return newState;
};
