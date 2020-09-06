type StateType = {
	backgroundColor: string
}
type ActionsType = SetThemeType
type SetThemeType = {
	type: typeof SET_THEME
	value: string
}

const SET_THEME = 'setTheme';

let initialState = document.body.style.backgroundColor = 'white';

export const themeReducer = (state: any = initialState, action: ActionsType) => {
	debugger
	switch (action.type) {
		case SET_THEME: {
			if (action.value === '1') {
				return document.body.style.backgroundColor = 'white';
			}
			if (action.value === '2') {
				return document.body.style.backgroundColor = 'black';
			}
			if (action.value === '3') {
				return document.body.style.backgroundColor = 'green';
			}
			break
		}
		default:
			return state
	}
}


export const setThemeAC = (value: string): SetThemeType => {
	return {type: SET_THEME, value}
}
