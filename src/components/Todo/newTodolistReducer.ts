import {TodoListType} from "../../App";
import {v1} from "uuid";

type ActionsType = {
type: string
	[key:string]: any
}

export const newTodolistReducer = (state:Array<TodoListType>, action:ActionsType) => {
	switch (action.type){
		case 'REMOVE_TODOLIST':{
			return state.filter(tl => tl.id !== action.id)
		}
		case 'ADD_TODOLIST':{
			let todoList: TodoListType = {id: v1(), title: action.title, filterTask: 'all'}
			return [
				todoList,
				...state
			]
		}
		case 'CHANGE_TODOLIST-TITLE':{
			let todoList = state.find(td => td.id === action.id)
			if (todoList) {
				todoList.title = action.title
				return [...state]
			}
		}
		default:{
			throw new Error('I dont understand your action.type')
		}
	}
}

