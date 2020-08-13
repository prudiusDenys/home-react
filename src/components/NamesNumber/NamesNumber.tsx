import React from "react";
import classes from "./NamesNumber.module.css";
import {NamesData} from "../../App";

type PropsType = {
	namesData: Array<NamesData>
}

export const NamesNumber = React.memo(function (props: PropsType){
	console.log('names number')
	return(
		<div className={classes.names}>
			Number of names = {props.namesData.length}
		</div>
	)
})




