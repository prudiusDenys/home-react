import React, {useContext} from "react";
import {NavBar} from "../NavBar";
import {ThemeContext} from "../../../themes/themes";


export const Home = () => {

	const theme = useContext(ThemeContext)

	return(
		<div style={theme}>
					<NavBar/>
		</div>
	)
}