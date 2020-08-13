import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "./AddItemForm.module.css";
import {Paper, TextField} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {PlaylistAdd} from "@material-ui/icons";

type PropsType = {
	addItem: (title: string) => void
}

export const AddItemForm = React.memo(function (props: PropsType){
	console.log('itemForm')
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

	return (
		<Paper>
			<div className={classes.itemForm}>
				<div className={classes.wrapper}>
					<TextField error={!!error}
										 value={value}
										 onChange={onChangeHandler}
										 onKeyPress={onKeyPressHandler}
										 label={'Add new TodoList'}
										 helperText={!!error ? "Incorrect entry." : ''}/>
					<IconButton onClick={addTaskHandler} color={"primary"}>
						<PlaylistAdd/>
					</IconButton>
				</div>
			</div>
		</Paper>
	)
})