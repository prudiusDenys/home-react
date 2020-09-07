import React, {ChangeEvent, KeyboardEvent, useCallback, useContext, useMemo, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {HashRouter, Route} from "react-router-dom";
import {PreJunior} from "./components/Task5/UsersPages/PreJunior";
import {Junior} from "./components/Task5/UsersPages/Junior";
import {JuniorPlus} from "./components/Task5/UsersPages/JuniorPlus";
import {Home} from "./components/Task5/UsersPages/Home";
import {useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {ThemeType, ThemeContext} from "./themes/themes";

export type dialogsDataType = {
	id: number,
	name: string,
	text: string
}
export type TasksType = {
	id: string
	item: string
	isDone: boolean
	importance: string
}
export type NamesData = {
	id?: string
	name?: string
}
export type FilterTaskType = 'all' | 'active' | 'completed' | 'height' | 'medium' | 'low';
export type TodoListType = {
	id: string
	title: string
	filterTask: FilterTaskType
}
export type TaskStateType = {
	[key: string]: Array<TasksType>
}


function App() {

	const dialogsData: Array<dialogsDataType> = useMemo(()=>{
		return(
			[
				{id: 1, name: 'Denis', text: 'npm start нажимал ?'},
				{id: 2, name: 'Andrey', text: 'Да, нажал!'},
				{id: 3, name: 'Ivan', text: 'Что такое npm ?'}
			]
		)
	},[])

	// =============================== HOME WORK NUMBER 2 ====================================

	let reference1 = v1();
	let reference2 = v1();

	let [todoLists, setTodoLists] = useState<Array<TodoListType>>([
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'completed'}
	])
	let [tasks, setTasks] = useState<TaskStateType>({
		[reference1]:
			[
				{id: v1(), item: 'React', isDone: false, importance: 'height'},
				{id: v1(), item: 'Английский', isDone: true, importance: 'medium'},
				{id: v1(), item: 'JS', isDone: true, importance: 'height'},
				{id: v1(), item: 'TypeScript', isDone: false, importance: 'medium'},
				{id: v1(), item: 'JestTests', isDone: false, importance: 'low'}
			],
		[reference2]: [
			{id: v1(), item: 'German', isDone: true, importance: 'height'},
			{id: v1(), item: 'English', isDone: true, importance: 'medium'},
			{id: v1(), item: 'Spain', isDone: false, importance: 'height'},
			{id: v1(), item: 'Chinese', isDone: false, importance: 'medium'},
		]
	})

	let addNewTask = useCallback((newTaskValue: string, todoListId: string) => {
		tasks[todoListId] = [{id: v1(), item: newTaskValue, isDone: false, importance: 'height'}, ...tasks[todoListId]]
		setTasks({...tasks});
	}, [tasks])
	let deleteTask = useCallback((idValue: string, todoListId: string) => {
		tasks[todoListId] = tasks[todoListId].filter(t => t.id !== idValue)
		setTasks({...tasks})
	}, [tasks])
	let changeStatus = useCallback((idValue: string, isDone: boolean, todoListId: string) => {
		let todoList = tasks[todoListId]
		let task = todoList.find(t => t.id === idValue)
		if (task) {
			task.isDone = isDone;
			setTasks({...tasks})
		}
	}, [tasks])
	let changeItemTask = useCallback((idValue: string, TaskValue: string, todoListId: string) => {
		let todoList = tasks[todoListId]
		let task = todoList.find(t => t.id === idValue)
		if (task) {
			task.item = TaskValue
			setTasks({...tasks})
		}
	}, [tasks])

	let addTodoList = useCallback((title: string) => {
		let todoList: TodoListType = {id: v1(), title: title, filterTask: 'all'}
		setTodoLists([todoList, ...todoLists])
		setTasks({...tasks, [todoList.id]: []})
	}, [todoLists])
	let removeTodoList = useCallback((todoListId: string) => {
		let filterTodoLists = todoLists.filter(tl => tl.id !== todoListId)
		setTodoLists(filterTodoLists)
		delete tasks[todoListId]
		setTasks({...tasks})
	}, [todoLists])
	let changeTodoListTitle = useCallback((todoListId: string, titleValue: string) => {
		let todoList = todoLists.find(td => td.id === todoListId)
		if (todoList) {
			todoList.title = titleValue
			setTodoLists([...todoLists])
		}
	}, [todoLists])
	let changeTasks = useCallback((valueNewFilter: FilterTaskType, todoListId: string) => {
		let todoList = todoLists.find(tl => tl.id === todoListId);
		if (todoList) {
			todoList.filterTask = valueNewFilter;
			setTodoLists([...todoLists])
		}
	}, [todoLists]);

	// =============================== HOME WORK NUMBER 3 and 4 ====================================
	const type = 'text'
	let [valueInp, setValueInp] = useState('')
	let [correctField, setCorrectField] = useState(true)
	let [namesData, setNamesData] = useState<Array<{ id: string, name: string }>>([])

	let showMessage = useCallback((value: string) => {
		alert(`Hello ${value}`);
		let newName = [...namesData, {id: v1(), name: value}]
		setNamesData(newName)
	}, [namesData])
	let onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValueInp(e.currentTarget.value)
		setCorrectField(true)
	}, [correctField])
	let onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
		if (e.charCode === 13 && e.currentTarget.value.trim() !== '') {
			showMessage(e.currentTarget.value.trim())
			setValueInp('')
		} else if (e.charCode === 13 && e.currentTarget.value.trim() === '') {
			setCorrectField(false)
			setValueInp('')
		}
	}, [valueInp])
	let onClickBtnHandler = useCallback(() => {
		if (valueInp.trim() !== '') {
			showMessage(valueInp.trim())
			setValueInp('')
		} else {
			setCorrectField(false)
			setValueInp('')
		}
	}, [valueInp])

const theme = useSelector<AppRootState, ThemeType>(state => state.webSiteTheme)
	const theme1 = useContext(ThemeContext)

	return (
		<ThemeContext.Provider value={theme}>
		<HashRouter>
			<div style={{background: theme1.background}}>
				<div className="App">
					<div className={'pages'}>
						<Route exact path={'/'} render={() => <Home/>}/>
						<Route path={'/preJunior'} render={() => <PreJunior dialogsData={dialogsData}
																																onClickBtnHandler={onClickBtnHandler}
																																onChangeHandler={onChangeHandler}
																																onKeyPressHandler={onKeyPressHandler}
																																setCorrectField={setCorrectField}
																																setValueInp={setValueInp}
																																valueInp={valueInp}
																																correctField={correctField}
																																namesData={namesData}
																																tasks={tasks}
																																todoLists={todoLists}
																																removeTodoList={removeTodoList}
																																addNewTask={addNewTask}
																																changeStatus={changeStatus}
																																changeTasks={changeTasks}
																																deleteTask={deleteTask}
																																addTodoList={addTodoList}
																																changeItemTask={changeItemTask}
																																changeTodoListTitle={changeTodoListTitle}/>
						}/>
						<Route path={'/junior'} render={() => <Junior/>}/>
						<Route path={'/juniorPlus'} render={() => <JuniorPlus/>}/>
					</div>
				</div>
			</div>
		</HashRouter>
			</ThemeContext.Provider>
	);
}

export default App;
