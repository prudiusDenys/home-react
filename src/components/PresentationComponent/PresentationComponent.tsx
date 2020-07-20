import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import classes from "./PresentationComponent.module.css";
import {Input} from "../../common/Input/Input";
import {Button} from "../../common/Button/Button";
import {Checkbox} from "../../common/Checkbox/Checkbox";


export const PresentationComponent = () => {

	const type = 'text'
	let [valueInp, setValueInp] = useState('')
	let [correctField, setCorrectField] = useState(true)
	let [checkbox, setCheckbox] = useState(false)

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValueInp(e.currentTarget.value)
		setCorrectField(true)
	}
	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && valueInp.trim() !== '') {
			alert('I work')
			setValueInp('')
		} else if (e.charCode === 13 && valueInp.trim() === '') {
			setCorrectField(false)
			setValueInp('')
		}
	}
	let onClickBtnHandler = () => {
		alert('I pressed')
	}
	let onClickCheckbox = () => {
		setCheckbox(!checkbox)
	}

	return (
		<div>
			<div className={classes.title}>
				TASK 4
			</div>
			<div className={classes.wrapper}>
				<Checkbox checkbox={checkbox}
									onClickCheckbox={onClickCheckbox}/>
				<Input valueInp={valueInp}
							 setValueInp={setValueInp}
							 correctField={correctField}
							 setCorrectField={setCorrectField}
							 onChangeHandler={onChangeHandler}
							 onKeyPressHandler={onKeyPressHandler}
							 placeholderDefault={''}/>
				<Button onClickBtnHandler={onClickBtnHandler}
								title={'SEND'}/>
			</div>
		</div>
	)
}