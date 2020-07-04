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
}

const Todo = (props: PropsType) => {

	let [value, setValue] = useState('')

	let elementItem = props.tasks.map(t =>
		<li key={t.id} className={classes.item}>
			<input checked={t.isDone} type="checkbox"/>{t.item}
			<button onClick={() => props.deleteTask(t.id)}>x</button>
		</li>)


	let showAllTasks = () => props.changeTasks('all');
	let showActiveTasks = () => props.changeTasks('active');
	let showCompletedTasks = () => props.changeTasks('completed');
	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
	let addTaskHandler = () => {
		props.addNewTask(value)
		setValue('');
	};
	let showImportanceTasks = ()=>props.changeImportance('height');
	let showMediumTasks = ()=>props.changeImportance('medium');
	let showLowTasks = ()=>props.changeImportance('low');


	let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13) {
			props.addNewTask(value)
			setValue('');
		}
	}

	let inputRef = React.createRef<any>()
	let showAddBlock = () => inputRef.current.classList.toggle(classes.active);
	let hideAddBlock = () => inputRef.current.classList.remove(classes.active);


	return (
		<div className={classes.todo}>
			<h2>{props.title}</h2>
			<ul className={classes.listItem}>
				{elementItem}
			</ul>
			<div className={classes.btns}>
				<button onClick={showAllTasks}>All tasks</button>
				<button onClick={showActiveTasks}>Active Tasks</button>
				<button onClick={showCompletedTasks}>Completed Tasks</button>
				<button onClick={showImportanceTasks}>Important</button>
				<button onClick={showMediumTasks}>Medium importance</button>
				<button onClick={showLowTasks}>Low important</button>
				<button onClick={showAddBlock}>Add Task</button>
			</div>
			<div className={classes.inputWrapper}>
				<div className={classes.input} ref={inputRef}>
					<h3>Add New Task</h3>
					<input value={value} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} type="text"/>
					<button onClick={addTaskHandler} className={classes.TaskAdd}>+</button>
					<h3 className={classes.close} onClick={hideAddBlock}>close</h3>
				</div>
			</div>
		</div>
	)
}

export default Todo;