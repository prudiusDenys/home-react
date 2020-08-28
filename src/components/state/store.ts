import {combineReducers, createStore} from "redux";
import {loadingReducer} from "./loading-reducer";

const rootReducer = combineReducers({
	loading: loadingReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)