import {v1} from "uuid";
import {TaskStateType} from "../../App";

type AddNewTaskType = {
	type: 'ADD_NEW_TASK'
	newTaskValue: string
	id: string
}
type RemoveTaskType = {
	type: 'REMOVE_TASK_TYPE'
	id: string
	todoListId: string
}
type ChangeStatusType = {
	type: 'CHANGE_STATUS'
	taskId: string
	isDone: boolean
	todoListId: string
}

type ChangeItemTaskType = {
	type: 'CHANGE_ITEM-TASK'
	taskId: string
	taskValue: string
	todoListId: string
}

type ActionsType = AddNewTaskType | RemoveTaskType | ChangeStatusType | ChangeItemTaskType

export const tasksReducer = (state: TaskStateType, action: ActionsType): TaskStateType => {

	switch (action.type) {
		case "ADD_NEW_TASK": {
			return {
				...state,
				[action.id]: state[action.id] = [{
					id: v1(),
					item: action.newTaskValue,
					isDone: false,
					importance: 'height'
				}, ...state[action.id]]

			}
		}
		case "REMOVE_TASK_TYPE": {
			return {
				...state,
				[action.todoListId]: state[action.todoListId].filter(t => t.id !== action.id)
			}
		}
		case "CHANGE_STATUS": {
			let todoList = state[action.todoListId]
			let task = todoList.find(t => t.id === action.taskId)
			if (task) {
				task.isDone = action.isDone;
			}
			return {
				...state
			}
		}
		case "CHANGE_ITEM-TASK":{
			let todoList = state[action.todoListId]
			let task = todoList.find(t => t.id === action.taskId)
			if (task) {
				task.item = action.taskValue
			}
			return {
				...state
			}
		}
		default:
			throw new Error("I don't understand your action type")
	}
}

export const addNewTaskAC = (newTaskValue: string, todoListId: string): AddNewTaskType => {
	return {type: "ADD_NEW_TASK", newTaskValue: newTaskValue, id: todoListId}
}

export const removeTaskType = (idValue: string, todoListId: string): RemoveTaskType => {
	return {type: 'REMOVE_TASK_TYPE', id: idValue, todoListId: todoListId}
}

export const changeStatus = (taskId: string, isDone: boolean, todoListId: string): ChangeStatusType => {
	return {type: 'CHANGE_STATUS', taskId, isDone, todoListId}
}

export const changeItemTask = (taskId: string, taskValue: string, todoListId: string): ChangeItemTaskType=> {
	return{type:'CHANGE_ITEM-TASK', taskId, taskValue, todoListId}
}