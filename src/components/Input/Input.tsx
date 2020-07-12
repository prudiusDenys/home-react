import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./Input.module.css";
import {NamesData} from "../../App";

type PropsType = {
	value: string
	setValue: (value: string) => void
	showMessage: (value: string) => void
	namesData: Array<NamesData>
	setWarningValue: (warningValue: boolean) => void
	warningValue: boolean
}

export const Input = (props: PropsType) => {

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.setValue(e.currentTarget.value)
		props.setWarningValue(false)

	}

	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && e.currentTarget.value.trim() !== '') {
			props.showMessage(e.currentTarget.value.trim())
			props.setValue('')
		} else if (e.charCode === 13 && e.currentTarget.value.trim() === '') {
			props.setWarningValue(true)
		}
	}
	let onClickBtnHandler = () => {
		if (props.value.trim() !== '') {
			props.showMessage(props.value.trim())
			props.setValue('')
		} else {
			props.setWarningValue(true)
		}
	}

	return (
		<div className={classes.inputWrapper}>
			<div className={classes.names}>
				Number of names = {props.namesData.length}
			</div>
			<div className={classes.inputBox}>
				<input className={(props.warningValue) ? classes.unCorrect : classes.correct} onChange={onChangeHandler}
							 onKeyPress={onKeyPressHandler} value={props.value} placeholder={'Write your name'} type="text"/>
				<button onClick={onClickBtnHandler}>Say Hello</button>
			</div>
			{props.warningValue && <div className={classes.error}>Please write your name!</div>}
		</div>
	)
}