import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "./PresCompForEditableSpan.module.css";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";
import {Button} from "../../common/Button/Button";
import {restoreState, saveState} from "../../LocalStorageFunctions/LocalStorageFunctions";


export const PresCompForEditableSpan = React.memo(() => {

	let [editMode, setEditMode] = useState(false);
	let [valueInp, setValueInp] = useState('');
	let [correctField, setCorrectField] = useState(true)

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValueInp(e.currentTarget.value)
		setCorrectField(true)
	}
	let onClickHandler = () => {
		setEditMode(true)
	}
	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && valueInp.trim() !== '') {
			setValueInp(valueInp)
			setEditMode(false)
		} else if (e.charCode === 13 && valueInp.trim() === '') {
			setCorrectField(false)
			setValueInp('')
		}
	}
	let onBlurHandler = () => {
		setEditMode(false)
	}
	let saveStateFunction = () => {
		saveState('data', valueInp);
	}
	let restoreStateFunction = () => {
		setValueInp(restoreState('data', ''));
	}

	return (
		<div className={classes.wrapper}>
			<EditableSpan editMode={editMode}
										valueInp={valueInp}
										onBlurHandler={onBlurHandler}
										onClickHandler={onClickHandler}
										correctField={correctField}
										onChangeHandler={onChangeHandler}
										onKeyPressHandler={onKeyPressHandler}/>
			<div className={classes.btnHandler}>
				<Button onClickBtnHandler={saveStateFunction} title={'Save state'}/>
				<Button onClickBtnHandler={restoreStateFunction} title={'Restore state'}/>
			</div>
		</div>
	)
})