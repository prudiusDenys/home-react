import {combineReducers, createStore} from "redux";
import {loadingReducer} from "../reducers/loading-reducer";
import {themeReducer} from "../reducers/theme-reducer";


const rootReducer = combineReducers({
	loading: loadingReducer,
	webSiteTheme: themeReducer
})

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)