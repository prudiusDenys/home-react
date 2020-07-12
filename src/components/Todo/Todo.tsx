import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "./Todo.module.css";
import {TasksType} from "../../App";

type PropsType = {
	title: string
	tasks: Array<TasksType>
	changeTasks: (value: string) => void;
	addNewTask: (value: string) => void;
	deleteTask: (idValue: string) => void;
	changeImportance: (importanceValue: string) => void;
	changeStatus: (idValue: string, isDone: boolean) => void
	filterTask: string
	error: null | string
	setError: (error: null | string) => void
}

const Todo = (props: PropsType) => {

	let [value, setValue] = useState('')

	let elementItem = props.tasks.map(t => {
			let onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
				props.changeStatus(t.id, e.currentTarget.checked)
			}
			let onClickDeleteHandler = () => {
				props.deleteTask(t.id)
			}
			return (
				<li key={t.id} className={t.isDone ? `${classes.item} ${classes.completedTask}` : classes.item}>
					<input onChange={onChangeStatusHandler} checked={t.isDone} type="checkbox"/>{t.item}
					<button onClick={onClickDeleteHandler}>x</button>
				</li>
			)
		}
	)


	let showAllTasks = () => props.changeTasks('all');
	let showActiveTasks = () => props.changeTasks('active');
	let showCompletedTasks = () => props.changeTasks('completed');
	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
		props.setError(null)
	}

	let addTaskHandler = () => {
		if (value.trim() !== '') {
			props.addNewTask(value)
			setValue('');
			setActive(false)
		} else {
			props.setError('you didn\'t enter eny character')
		}
	};
	let showImportanceTasks = () => props.changeImportance('height');
	let showMediumTasks = () => props.changeImportance('medium');
	let showLowTasks = () => props.changeImportance('low');
	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && value.trim() !== '') {
			props.addNewTask(value)
			setValue('');
			setActive(false)
		} else {
			props.setError('you didn\'t enter eny character')
		}
	}

	let [active, setActive] = useState(false);
	let showAddBlock = () => setActive(!active);
	let hideAddBlock = () => {
		setActive(false);
		props.setError(null)

	}

	const showDisplay = {display: active ? 'block' : 'none'};

	return (
		<div className={classes.todo}>
			<h2>{props.title}</h2>
			<ul className={classes.listItem}>
				{elementItem}
			</ul>
			<div className={classes.btns}>
				<button className={props.filterTask === 'all' ? classes.active : ''} onClick={showAllTasks}>All tasks</button>
				<button className={props.filterTask === 'active' ? classes.active : ''} onClick={showActiveTasks}>Active Tasks</button>
				<button className={props.filterTask === 'completed' ? classes.active : ''} onClick={showCompletedTasks}>Completed Tasks</button>
				<button className={props.filterTask === 'height' ? classes.active : ''} onClick={showImportanceTasks}>Important</button>
				<button className={props.filterTask === 'medium' ? classes.active : ''} onClick={showMediumTasks}>Medium importance</button>
				<button className={props.filterTask === 'low' ? classes.active : ''} onClick={showLowTasks}>Low important</button>
				<button className={active ? classes.active : ''} onClick={showAddBlock}>Add Task</button>
			</div>
			<div className={classes.inputWrapper}>
				<div className={classes.input} style={showDisplay}>
					<h3>Add New Task</h3>
					<input className={props.error ? classes.error : ''} placeholder={props.error ? props.error : ''} type="text"
								 value={value}
								 onChange={onChangeHandler}
								 onKeyPress={onKeyPressHandler}/>
					<button onClick={addTaskHandler} className={classes.TaskAdd}>+</button>
					<h3 className={classes.close} onClick={hideAddBlock}>close</h3>
				</div>
			</div>
		</div>
	)
}

export default Todo;