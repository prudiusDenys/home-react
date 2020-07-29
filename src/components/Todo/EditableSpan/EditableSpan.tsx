import React, {ChangeEvent, KeyboardEvent, useState} from "react";

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
		editMode ? <input style={correctValue ? undefined : error} type="text" value={inputValue} onChange={onChangeHandler}
											onBlur={onBlurHandler} onKeyPress={onKeyPressHandler} autoFocus
											placeholder={correctValue ? '' : "Task name is missing"}/>
			: <span onDoubleClick={onDoubleClickHandler}>{props.itemValue}</span>
	)
}