import React from "react";
import classes from "./Preloader.module.css";
import {CircularProgress} from "@material-ui/core";

export const Preloader = React.memo(() => {
	console.log('preloader')
	return(
		<div className={classes.preloaderWrapper}>
			<CircularProgress />
		</div>
	)
})
