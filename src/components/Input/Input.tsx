import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./Input.module.css";
import {NamesData} from "../../App";

type PropsType = {
	value: string
	setValue: (value: string) => void
	showMessage: (value: string) => void
	showWarning: () => void
	namesData: Array<NamesData>
	setWarningValue: (warningValue: boolean) => void
	warningValue: boolean
}

export const Input = (props: PropsType) => {

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => props.setValue(e.currentTarget.value)
	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && e.currentTarget.value !== '') {
			props.showMessage(e.currentTarget.value)
			props.setValue('')
		} else if (e.charCode === 13 && e.currentTarget.value === '') {
			props.showWarning()
		}
	}
	let onClickBtnHandler = () => {
		if (props.value !== '') {
			props.showMessage(props.value)
			props.setValue('')
		} else {
			props.showWarning()
		}
	}

	return (
		<div className={classes.inputWrapper}>
			<div className={classes.inputBox}>
				<input className={(props.warningValue) ? classes.unCorrect : classes.correct} onChange={onChangeHandler}
							 onKeyPress={onKeyPressHandler} value={props.value} placeholder={'Write your name'} type="text"/>
				<button onClick={onClickBtnHandler}>Say Hello</button>
			</div>
			<div className={classes.names}>
				Number of names = {props.namesData.length}
			</div>
		</div>
	)
}