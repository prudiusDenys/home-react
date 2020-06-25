import React from "react";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import {dialogsDataType} from "../../App";

type propsType = {
	dialogsData: Array<dialogsDataType>,
}

const Dialogs = (props: propsType) => {
	return (
		<div className={classes.dialogs}>
			<Message name = {props.dialogsData[0].name}  text = {props.dialogsData[0].text}/>
			<Message name = {props.dialogsData[1].name}  text = {props.dialogsData[1].text}/>
			<Message name = {props.dialogsData[2].name}  text = {props.dialogsData[2].text}/>
		</div>
	)
}

export default Dialogs;