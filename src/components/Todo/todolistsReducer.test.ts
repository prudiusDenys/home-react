import {v1} from "uuid";
import {TodoListType} from "../../App";
import {
	addTodolistAC,
	changeTodolistAC,
	changeTodolistFilterAC,
	removeTodolistAC,
	todolistsReducer
} from "./todolistsReducer";

test('correct todolist should be removed', () => {

	let reference1 = v1();
	let reference2 = v1();

	const startState: Array<TodoListType> = [
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'completed'}
	]

	const endState = todolistsReducer(startState, removeTodolistAC(reference1))

	expect(endState.length).toBe(1)
	expect(endState[0].id).toBe(reference2)

})
test('correct todolist should be added', () => {

	let reference1 = v1();
	let reference2 = v1();

	let newTodoListTitle = 'New TodoList'

	const startState: Array<TodoListType> = [
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'completed'}
	]

	const endState = todolistsReducer(startState, addTodolistAC(newTodoListTitle))

	expect(endState.length).toBe(3)
	expect(endState[2].title).toBe(newTodoListTitle)
	expect(endState[2].filterTask).toBe('all')

})
test('change todolist title', () => {

	let reference1 = v1();
	let reference2 = v1();

	const startState: Array<TodoListType> = [
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'completed'}
	]

	const newTodolistTitle = 'Im a new todoList'

	const endState = todolistsReducer(startState, changeTodolistAC(reference1,newTodolistTitle))

	expect(endState[0].title).toBe(newTodolistTitle)
	expect(endState[1].title).toBe('My second Todo list')
})
test('correct filter of todolist should be changed', () => {

	let reference1 = v1();
	let reference2 = v1();

	const startState: Array<TodoListType> = [
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'all'}
	]

	const filterValuesType = 'completed';

	const endState = todolistsReducer(startState, changeTodolistFilterAC(reference1,filterValuesType))

	expect(endState[0].filterTask).toBe(filterValuesType)
	expect(endState[1].filterTask).toBe('all')
})