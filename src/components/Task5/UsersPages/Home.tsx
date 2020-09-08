import React, {useContext} from "react";
import classes from "./Home.module.css";
import {NavBar} from "../NavBar";
import {ThemeContext} from "../../../themes/themes";


export const Home = () => {

	const theme = useContext(ThemeContext)

	return(
		<div className={classes.home} style={theme}>
					<NavBar/>
		</div>
	)
}