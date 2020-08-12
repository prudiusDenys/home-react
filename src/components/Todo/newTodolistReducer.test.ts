import {v1} from "uuid";
import {TodoListType} from "../../App";
import {newTodolistReducer} from "./newTodolistReducer";

test('remove todolist', ()=>{

	let reference1 = v1();
	let reference2 = v1();

	const startState: Array<TodoListType> = [
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'completed'}
	]

	const action = {
		type: 'REMOVE_TODOLIST',
		id: reference1
	}
	const endState = newTodolistReducer(startState, action)

	expect(endState.length).toBe(1)

})
test('add todolist', ()=>{

	let reference1 = v1();
	let reference2 = v1();

	const startState: Array<TodoListType> = [
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'completed'}
	]

	const action = {
		type: 'ADD_TODOLIST',
		title: 'Hello this is newTodo'
	}
	const endState = newTodolistReducer(startState, action)

	expect(endState.length).toBe(3)
	expect(endState[0].title).toBe('Hello this is newTodo')
})
test('changeTodoListTitle', ()=>{

	let reference1 = v1();
	let reference2 = v1();

	const startState: Array<TodoListType> = [
		{id: reference1, title: 'My first Todo list', filterTask: 'all'},
		{id: reference2, title: 'My second Todo list', filterTask: 'completed'}
	]

	const action = {
		type: 'CHANGE_TODOLIST-TITLE',
		id: reference1,
		title: 'Hiiii'
	}
	const endState = newTodolistReducer(startState, action)

	expect(endState[0].title).toBe(action.title)
	expect(endState[1].title).toBe('My second Todo list')
})
