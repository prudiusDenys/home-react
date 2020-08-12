
import {v1} from "uuid";
import {addNewTaskAC, changeItemTask, changeStatus, removeTaskType, tasksReducer} from "./tasksReducer";

test('Add new Task in TodoList', () => {

	let reference1 = v1();
	let reference2 = v1();

	let startState = {
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
	}

	const newTaskValue = 'I am a new Task'

	const endState  = tasksReducer(startState, addNewTaskAC(newTaskValue, reference1))

	expect(endState[reference1][0].item).toBe(newTaskValue)
	expect(endState[reference1].length).toBe(6)
	expect(endState[reference2].length).toBe(4)
})
test('Delete new Task in TodoList', () => {

	let reference1 = v1();
	let reference2 = v1();

	let startState = {
		[reference1]:
			[
				{id: '1', item: 'React', isDone: false, importance: 'height'},
				{id: '2', item: 'Английский', isDone: true, importance: 'medium'},
				{id: '3', item: 'JS', isDone: true, importance: 'height'},
				{id: '4', item: 'TypeScript', isDone: false, importance: 'medium'},
				{id: '5', item: 'JestTests', isDone: false, importance: 'low'}
			],
		[reference2]: [
			{id: v1(), item: 'German', isDone: true, importance: 'height'},
			{id: v1(), item: 'English', isDone: true, importance: 'medium'},
			{id: v1(), item: 'Spain', isDone: false, importance: 'height'},
			{id: v1(), item: 'Chinese', isDone: false, importance: 'medium'},
		]
	}

	const endState  = tasksReducer(startState, removeTaskType('1', reference1))

	expect(endState[reference1].length).toBe(4)
	expect(endState[reference2].length).toBe(4)
})
test('Change status in tasks', () => {

	let reference1 = v1();
	let reference2 = v1();

	let startState = {
		[reference1]:
			[
				{id: '1', item: 'React', isDone: false, importance: 'height'},
				{id: '2', item: 'Английский', isDone: true, importance: 'medium'},
				{id: '3', item: 'JS', isDone: true, importance: 'height'},
				{id: '4', item: 'TypeScript', isDone: false, importance: 'medium'},
				{id: '5', item: 'JestTests', isDone: false, importance: 'low'}
			],
		[reference2]: [
			{id: '1', item: 'German', isDone: true, importance: 'height'},
			{id: '2', item: 'English', isDone: true, importance: 'medium'},
			{id: '3', item: 'Spain', isDone: false, importance: 'height'},
			{id: '4', item: 'Chinese', isDone: false, importance: 'medium'},
		]
	}

	const endState  = tasksReducer(startState, changeStatus('2', false, reference2))

	expect(endState[reference2][1].isDone).toBe(false)
})
test('Change item task', () => {

	let reference1 = v1();
	let reference2 = v1();

	let startState = {
		[reference1]:
			[
				{id: '1', item: 'React', isDone: false, importance: 'height'},
				{id: '2', item: 'Английский', isDone: true, importance: 'medium'},
				{id: '3', item: 'JS', isDone: true, importance: 'height'},
				{id: '4', item: 'TypeScript', isDone: false, importance: 'medium'},
				{id: '5', item: 'JestTests', isDone: false, importance: 'low'}
			],
		[reference2]: [
			{id: '1', item: 'German', isDone: true, importance: 'height'},
			{id: '2', item: 'English', isDone: true, importance: 'medium'},
			{id: '3', item: 'Spain', isDone: false, importance: 'height'},
			{id: '4', item: 'Chinese', isDone: false, importance: 'medium'},
		]
	}

	let itemValue = 'hello'

	const endState  = tasksReducer(startState, changeItemTask('1', itemValue, reference2))

	expect(endState[reference2][0].item).toBe(itemValue)
})