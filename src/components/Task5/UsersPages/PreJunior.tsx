import React, {ChangeEvent, KeyboardEvent} from "react";
import classes from "./PreJunior.module.css";
import {NavBar} from "../NavBar";
import {dialogsDataType, FilterTaskType, NamesData, TaskStateType, TodoListType} from "../../../App";
import Dialogs from "../../Dialogs/Dialogs";
import {Input} from "../../../common/Input/Input";
import {Button} from "../../../common/Button/Button";
import {NamesNumber} from "../../NamesNumber/NamesNumber";
import {PresentationComponent} from "../../PresentationComponent/PresentationComponent";
import Todo from "../../Todo/Todo";
import {AddItemForm} from "../../Todo/AddItemForm/AddItemForm";

type PropsType = {
	dialogsData: Array<dialogsDataType>
	valueInp: string
	setValueInp: (value: string) => void
	correctField?: boolean
	setCorrectField: (correctField: boolean) => void
	onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
	onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
	placeholderDefault?: string
	onClickBtnHandler: () => void
	namesData: Array<NamesData>
	tasks: TaskStateType
	todoLists: Array<TodoListType>
	changeTasks: (value: FilterTaskType, todoListId: string) => void;
	addNewTask: (value: string, todoListId: string) => void;
	deleteTask: (idValue: string, todoListId: string) => void;
	changeStatus: (idValue: string, isDone: boolean, todoListId: string) => void
	removeTodoList: (todoListId: string) => void
	addTodoList: (title: string)=>void
}

export const PreJunior = (props: PropsType) => {

	let todoList = props.todoLists.map(tl => {

		let newFilteredTasks = props.tasks[tl.id]
		switch (tl.filterTask) {
			case 'active':
				newFilteredTasks = newFilteredTasks.filter(t => !t.isDone)
				break;
			case 'completed':
				newFilteredTasks = newFilteredTasks.filter(t => t.isDone);
				break;
			case 'height':
				newFilteredTasks = newFilteredTasks.filter((t => t.importance === 'height'))
				break;
			case 'medium':
				newFilteredTasks = newFilteredTasks.filter((t => t.importance === 'medium'))
				break;
			case 'low':
				newFilteredTasks = newFilteredTasks.filter((t => t.importance === 'low'))
				break;
		}

		return (
			<div>
				<Todo key={tl.id}
							id={tl.id}
							title={tl.title}
							tasks={newFilteredTasks}
							changeTasks={props.changeTasks}
							addNewTask={props.addNewTask}
							deleteTask={props.deleteTask}
							changeStatus={props.changeStatus}
							filterTask={tl.filterTask}
							removeTodoList={props.removeTodoList}/>
			</div>

		)
	})



	return (
		<div className={classes.wrapper}>
			<NavBar/>
			<Dialogs dialogsData={props.dialogsData}/>

			<div className={'todoListWrapper'}>
				<div className={classes.addNewTodoList}>
					<AddItemForm addItem={props.addTodoList}/>
				</div>
				{todoList}
			</div>
			<div className={'inputWrapper'}>
				<Input valueInp={props.valueInp}
							 setValueInp={props.setValueInp}
							 correctField={props.correctField}
							 setCorrectField={props.setCorrectField}
							 onChangeHandler={props.onChangeHandler}
							 onKeyPressHandler={props.onKeyPressHandler}
							 placeholderDefault={'Write your name'}/>
				<Button onClickBtnHandler={props.onClickBtnHandler}
								title={'SAY HELLO'}
								typeOfButton={'red'}/>
			</div>

			<NamesNumber namesData={props.namesData}/>
			<PresentationComponent/>
		</div>
	)
}