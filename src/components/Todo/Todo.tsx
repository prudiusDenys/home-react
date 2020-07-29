import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "./Todo.module.css";
import {FilterTaskType, TasksType} from "../../App";
import {AddTaskInput} from "./AddTaskInput/AddTaskInput";

type PropsType = {
	id: string
	title: string
	tasks: Array<TasksType>
	changeTasks: (value: FilterTaskType, todoListId: string) => void;
	addNewTask: (value: string, todoListId: string) => void;
	deleteTask: (idValue: string, todoListId: string) => void;
	changeStatus: (idValue: string, isDone: boolean, todoListId: string) => void
	filterTask: string
	removeTodoList: (todoListId: string) => void
}

const Todo = (props: PropsType) => {

	const [active, setActive] = useState(false);
	const showAddBlock = () => setActive(!active);

	let elementItem = props.tasks.map(t => {
			let onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
				props.changeStatus(t.id, e.currentTarget.checked, props.id)
			}
			let onClickDeleteHandler = () => {
				props.deleteTask(t.id, props.id)
			}
			return (
				<li key={t.id} className={t.isDone ? `${classes.item} ${classes.completedTask}` : classes.item}>
					<input onChange={onChangeStatusHandler} checked={t.isDone} type="checkbox"/>{t.item}
					<button onClick={onClickDeleteHandler}>x</button>
				</li>
			)
		}
	)

	let showAllTasks = () => props.changeTasks('all', props.id);
	let showActiveTasks = () => props.changeTasks('active', props.id);
	let showCompletedTasks = () => props.changeTasks('completed', props.id);
	let showImportanceTasks = () => props.changeTasks('height', props.id);
	let showMediumTasks = () => props.changeTasks('medium', props.id);
	let showLowTasks = () => props.changeTasks('low', props.id);
	let removeTodoListHandler = () => {
		props.removeTodoList(props.id)
	}

	let addNewTask = (title: string) => {
		props.addNewTask(title, props.id)
	}

	return (
		<div className={classes.todo}>
			<h2>{props.title}
				<button className={classes.deleteTitle} onClick={removeTodoListHandler}>Delete ToDoList</button>
			</h2>
			<ul className={classes.listItem}>
				{elementItem}
			</ul>
			<div className={classes.btns}>
				<button className={props.filterTask === 'all' ? classes.active : ''} onClick={showAllTasks}>All tasks</button>
				<button className={props.filterTask === 'active' ? classes.active : ''} onClick={showActiveTasks}>Active Tasks
				</button>
				<button className={props.filterTask === 'completed' ? classes.active : ''}
								onClick={showCompletedTasks}>Completed Tasks
				</button>
				<button className={props.filterTask === 'height' ? classes.active : ''}
								onClick={showImportanceTasks}>Important
				</button>
				<button className={props.filterTask === 'medium' ? classes.active : ''} onClick={showMediumTasks}>Medium
					importance
				</button>
				<button className={props.filterTask === 'low' ? classes.active : ''} onClick={showLowTasks}>Low important
				</button>
				<button className={active ? classes.active : ''} onClick={showAddBlock}>Add Task</button>
			</div>
			<AddTaskInput addNewTask={addNewTask}
										active={active}
										setActive={setActive}/>
		</div>
	)
}

export default Todo;