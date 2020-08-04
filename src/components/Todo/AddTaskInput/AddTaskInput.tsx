import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "../Todo.module.css";

type PropsType = {
	addNewTask: (inputValue: string)=>void
	active: boolean
	setActive: (boolean: boolean)=>void
}

export const AddTaskInput = (props: PropsType) => {
	let [value, setValue] = useState('')
	let [error, setError] = useState<string | null>(null);
	const showDisplay = {display: props.active ? 'block' : 'none'};

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
		setError(null)
	}
	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && value.trim() !== '') {
			props.addNewTask(value)
			setValue('');
			props.setActive(false)
		} else {
			setError('you didn\'t enter eny character')
		}
	}
	let addTaskHandler = () => {
		if (value.trim() !== '') {
			props.addNewTask(value)
			setValue('');
			props.setActive(false)
		} else {
			setError('you didn\'t enter eny character')
		}
	};
	let hideAddBlock = () => {
		props.setActive(false);
		setError(null)
	}

	return(
		<div className={classes.inputWrapper}>
			<div className={classes.input} style={showDisplay}>
				<h3>Add New Task</h3>
				<input  className={error ? classes.error : ''} placeholder={error ? error : ''} type="text"
							 value={value}
							 onChange={onChangeHandler}
							 onKeyPress={onKeyPressHandler}/>

				<button onClick={addTaskHandler} className={classes.TaskAdd}>+</button>

				<h3 className={classes.close} onClick={hideAddBlock}>close</h3>
			</div>
		</div>
	)
}