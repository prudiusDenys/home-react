import {darkTheme, greenTheme, lightTheme, ThemeType} from "../themes/themes";

type SetThemeType = {
	type: typeof SET_THEME
	value: string
}
const SET_THEME = 'setTheme';


export const themeReducer = (state:ThemeType = lightTheme, action: SetThemeType):ThemeType => {
	switch (action.type) {
		case SET_THEME: {
			if (action.value === '1') {
				return lightTheme
			}
			if (action.value === '2') {
				return darkTheme
			}
			if (action.value === '3') {
				return greenTheme
			}
			return state
		}
		default:
			return state
	}
}

export const setThemeAC = (value: string): SetThemeType => {
	return {type: SET_THEME, value}
}
