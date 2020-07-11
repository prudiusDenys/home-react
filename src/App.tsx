import React, {useState} from 'react';
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Todo from "./components/Todo/Todo";
import {v1} from "uuid";
import {Input} from "./components/Input/Input";

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

function App() {

	const dialogsData: Array<dialogsDataType> = [
		{id: 1, name: 'Denis', text: 'npm start нажимал ?'},
		{id: 2, name: 'Andrey', text: 'Да, нажал!'},
		{id: 3, name: 'Ivan', text: 'Что такое npm ?'}
	];

	// =============================== HOME WORK NUMBER 2 ====================================

	let [tasks, setTasks] = useState<Array<TasksType>>([
		{id: v1(), item: 'React', isDone: false, importance: 'height'},
		{id: v1(), item: 'Английский', isDone: true, importance: 'medium'},
		{id: v1(), item: 'JS', isDone: true, importance: 'height'},
		{id: v1(), item: 'TypeScript', isDone: false, importance: 'medium'},
		{id: v1(), item: 'JestTests', isDone: false, importance: 'low'}
	])

	let [filterTask, setFilterTask] = useState('all');

	let addNewTask = (newTaskValue: string) => {
		let newTasks = [{id: v1(), item: newTaskValue, isDone: false, importance: 'height'}, ...tasks]
		setTasks(newTasks);
	}
	let changeTasks = (valueNewFilter: string) => setFilterTask(valueNewFilter);
	let deleteTask = (idValue: string) => {
		tasks = tasks.filter(t => t.id !== idValue)
		setTasks(tasks)
	}
	let changeImportance = (importanceValue: string) => setFilterTask(importanceValue)

	let newFilteredTasks = tasks
	switch (filterTask) {
		case 'active':
			newFilteredTasks = tasks.filter(t => !t.isDone)
			break;
		case 'completed':
			newFilteredTasks = tasks.filter(t => t.isDone);
			break;
		case 'height':
			newFilteredTasks = tasks.filter((t => t.importance === 'height'))
			break;
		case 'medium':
			newFilteredTasks = tasks.filter((t => t.importance === 'medium'))
			break;
		case 'low':
			newFilteredTasks = tasks.filter((t => t.importance === 'low'))
			break;
	}

	// =============================== HOME WORK NUMBER 3 ====================================

	let [value, setValue] = useState('')
	let [namesData, setNamesData] = useState<Array<{ id: string, name: string }>>([])
	let [warningValue, setWarningValue] = useState(false);


	let showMessage = (value: string) => {
		alert(`Hello ${value}`);
		let newName = [...namesData, {id: v1(), name: value}]
		setNamesData(newName)
		setWarningValue(false)
	};
	let showWarning = () => {
		alert("You didn't enter any text");
		setWarningValue(true)
	}

	return (
		<div>
			<div className="App">
				<Dialogs dialogsData={dialogsData}/>
				<Todo title='My Todo List'
							tasks={newFilteredTasks}
							changeTasks={changeTasks}
							addNewTask={addNewTask}
							deleteTask={deleteTask}
							changeImportance={changeImportance}/>
				<Input value={value}
							 setValue={setValue}
							 showMessage={showMessage}
							 showWarning={showWarning}
							 namesData={namesData}
							 setWarningValue={setWarningValue}
							 warningValue={warningValue}/>
			</div>
		</div>
	);
}

export default App;
