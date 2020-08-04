import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {TextField} from "@material-ui/core";

type PropsType = {
	itemValue: string
	getNewInputValue: (inputValue: string) => void
}

export const EditableSpan = (props: PropsType) => {

	const [editMode, setEditMode] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [correctValue, setCorrectValue] = useState(true);

	const onDoubleClickHandler = () => {
		setEditMode(true);
		setInputValue(props.itemValue)
	}
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
		setCorrectValue(true)
	}
	const onBlurHandler = () => {
		if (inputValue.trim() !== '') {
			setEditMode(false)
			props.getNewInputValue(inputValue)
		} else {
			setCorrectValue(false)
		}
	}
	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && inputValue.trim() !== '') {
			setEditMode(false)
			props.getNewInputValue(inputValue)
		} else {
			setCorrectValue(false)
		}
	}

	const error = {
		backgroundColor: 'red',
	}

	return (
		editMode ? <TextField error={!correctValue}
													value={inputValue}
													onChange={onChangeHandler}
													onBlur={onBlurHandler}
													onKeyPress={onKeyPressHandler}
													autoFocus
													helperText={correctValue ? '' : 'Task name is missing'}
													label={'edit task'}/>
			: <span onDoubleClick={onDoubleClickHandler}>{props.itemValue}</span>
	)
}