import React from "react";

export type ThemeType = {
	background: string,
	color: string
}

export const lightTheme = {
	background: 'white',
	color: 'black'
}
export const darkTheme = {
	background: 'black',
	color: 'white'

}
export const greenTheme = {
	background: 'green',
	color: 'blue'
}

export const ThemeContext = React.createContext<ThemeType>(lightTheme)