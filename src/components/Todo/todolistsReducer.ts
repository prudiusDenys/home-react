import {TodoListType} from "../../App";
import {v1} from "uuid";

type ActionType = {
	type: string
	[key: string]: any
}

export const todolistsReducer = (state: Array<TodoListType>, action: ActionType): Array<TodoListType> => {

	switch (action.type) {
		case 'REMOVE-TODOLIST':
			return (
				state.filter(tl => tl.id !== action.id)
			)
		case 'ADD-TODOLIST':
			return [...state, {id: v1(), title: action.title, filterTask: 'all'}];
		case 'CHANGE_TODOLIST-TITLE': {
			let todoList = state.find(td => td.id === action.id)
			if (todoList) {
				todoList.title = action.title
			}
			return [...state]
		}
		case 'CHANGE_TODOLIST-FILTER':{
			let todoList = state.find(td => td.id === action.id)
			if (todoList) {
				todoList.filterTask = action.filter
			}
			return [...state]
		}
		default:
			throw new Error("I don't understand your action type")
	}
}

export const removeTodolistAC = (todolistId : string) => {
	return{type: 'REMOVE-TODOLIST', id: todolistId}
}

export const addTodolistAC = (newTodoListTitle : string) => {
	return{type: 'ADD-TODOLIST', title: newTodoListTitle}
}
export const changeTodolistAC = (reference1 : string, title:string) => {
	return{type: 'CHANGE_TODOLIST-TITLE', id: reference1, title: title}
}

export const changeTodolistFilterAC = (reference1 : string, filterValuesType:string) => {
	return{type: 'CHANGE_TODOLIST-FILTER', id: reference1, filter: filterValuesType}
}