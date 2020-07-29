import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "./AddItemForm.module.css";

type PropsType = {
	addItem: (title: string)=>void
}

export const AddItemForm = (props: PropsType) => {
	let [value, setValue] = useState('')
	let [error, setError] = useState<string | null>(null);

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
		setError(null)
	}
	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && value.trim() !== '') {
			props.addItem(value)
			setValue('');
		} else {
			setError('you didn\'t enter eny character')
		}
	}
	let addTaskHandler = () => {
		if (value.trim() !== '') {
			props.addItem(value)
			setValue('');
		} else {
			setError('you didn\'t enter eny character')
		}
	};

	return(
		<div className={classes.itemForm}>
			<h3>Add new TodoList</h3>
			<div className={classes.wrapper}>
				<input className={error ? classes.error : classes.inputValue} placeholder={error ? error : ''} type="text"
							 value={value}
							 onChange={onChangeHandler}
							 onKeyPress={onKeyPressHandler}/>
				<button onClick={addTaskHandler} className={classes.taskAdd}>Add</button>
			</div>
		</div>
	)
}