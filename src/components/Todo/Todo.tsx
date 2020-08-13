import React, {ChangeEvent, useState} from "react";
import classes from "./Todo.module.css";
import {FilterTaskType, TasksType} from "../../App";
import {AddTaskInput} from "./AddTaskInput/AddTaskInput";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import {Button, Checkbox} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Delete} from "@material-ui/icons";

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
	changeItemTask: (idValue: string, taskValue: string, todoListId: string) => void
	changeTodoListTitle: (todoListId: string, titleValue: string,) => void
}


const Todo = React.memo(function (props: PropsType){
	console.log('TODO')

	const [active, setActive] = useState(false);
	const showAddBlock = () => setActive(!active);

	let elementItem = props.tasks.map(t => {
			let onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
				props.changeStatus(t.id, e.currentTarget.checked, props.id)
			}
			let onClickDeleteHandler = () => {
				props.deleteTask(t.id, props.id)
			}
			let getNewInputValue = (inputValue: string) => {
				props.changeItemTask(t.id, inputValue, props.id)
			}

			return (
				<li key={t.id} className={t.isDone ? `${classes.item} ${classes.completedTask}` : classes.item}>
					<Checkbox  onChange={onChangeStatusHandler} checked={t.isDone} color={"primary"}/>
					<EditableSpan itemValue={t.item} getNewInputValue={getNewInputValue}/>
					<IconButton onClick={onClickDeleteHandler} aria-label="delete">
						<Delete />
					</IconButton>
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
	let getNewTitleValue = (titleValue: string) => {
		props.changeTodoListTitle(props.id, titleValue)
	}

	return (
		<div className={classes.todo}>
			<h2>
				<EditableSpan itemValue={props.title} getNewInputValue={getNewTitleValue}/>
				<IconButton onClick={removeTodoListHandler} aria-label="delete">
					<Delete />
				</IconButton>
			</h2>
			<ul className={classes.listItem}>
				{elementItem}
			</ul>
			<div className={classes.btns}>
				<div className={classes.btnsBases}>
					<Button variant={props.filterTask === 'all' ? 'contained' : 'text'} color={"primary"} onClick={showAllTasks}>All</Button>
					<Button variant={props.filterTask === 'active' ? 'contained' : 'text'} color={'primary'} onClick={showActiveTasks}>Active</Button>
					<Button variant={props.filterTask === 'completed' ? 'contained' : 'text'} color={"primary"} onClick={showCompletedTasks}>Completed</Button>
				</div>
				<div className={classes.btnsImportance}>
					<Button variant={props.filterTask === 'height' ? 'contained' : 'text'} color={"primary"} onClick={showImportanceTasks}>Important</Button>
					<Button variant={props.filterTask === 'medium' ? 'contained' : 'text'} color={"primary"} onClick={showMediumTasks}>Medium</Button>
					<Button variant={props.filterTask === 'low' ? 'contained' : 'text'} color={"primary"} onClick={showLowTasks}>Low</Button>
				</div>

				<Button style={{width: '100%'}}  className={active ? classes.active : ''} color={"secondary"} onClick={showAddBlock}>Add Task</Button>
			</div>
			<AddTaskInput addNewTask={addNewTask}
										active={active}
										setActive={setActive}/>
		</div>
	)
})

export default Todo;