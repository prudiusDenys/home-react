import React from "react";
import classes from "./NamesNumber.module.css";
import {NamesData} from "../../App";

type PropsType = {
	namesData: Array<NamesData>
}

export const NamesNumber = (props: PropsType) => {
	return(
		<div className={classes.names}>
			Number of names = {props.namesData.length}
		</div>
	)
}




