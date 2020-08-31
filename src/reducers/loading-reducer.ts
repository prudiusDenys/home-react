const SET_LOADING = 'SET_LOADING'

export type StateType = {
	loading: boolean
}
type ActionsType = SetLoadingType
export type SetLoadingType = {
	type: typeof SET_LOADING
	loading: boolean
}

const initialState = {
	loading: false
}


export const loadingReducer = (state: StateType = initialState, action: ActionsType): StateType => {
	switch (action.type) {
		case SET_LOADING: {
			return {
				...state,
				loading: action.loading
			}
		}
		default: {
			return state
		}
	}
}


export const setLoading = (loading: boolean): SetLoadingType => {
	return {type: SET_LOADING, loading}
}
