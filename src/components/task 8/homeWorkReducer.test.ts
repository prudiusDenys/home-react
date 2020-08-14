import {getAdultPeopleAC, homeWorkReducer, sortPeopleDownAC, sortPeopleUpAC} from "./homeWorkReducer";

test('reducer should return sorted array of people by names from up to down ',()=>{

	const people = [
		{id: '1', name: 'Denis', age: 27},
		{id: '2', name: 'Andrey', age: 30},
		{id: '3', name: 'Ivan', age: 35},
		{id: '4', name: 'Sasha', age: 18},
	]

	const payload = 'up';

	const endState = homeWorkReducer(people, sortPeopleUpAC(payload))
	expect(endState[0].name).toBe('Andrey')
	expect(endState[1].name).toBe('Denis')
	expect(endState[2].name).toBe('Ivan')
	expect(endState[3].name).toBe('Sasha')

})
test('reducer should return sorted array of people by names from down to up ',()=>{

	const people = [
		{id: '1', name: 'Denis', age: 27},
		{id: '2', name: 'Andrey', age: 30},
		{id: '3', name: 'Ivan', age: 35},
		{id: '4', name: 'Sasha', age: 18},
	]

	const payload = 'down';

	const endState = homeWorkReducer(people, sortPeopleDownAC(payload))
	expect(endState[0].name).toBe('Sasha')
	expect(endState[1].name).toBe('Ivan')
	expect(endState[2].name).toBe('Denis')
	expect(endState[3].name).toBe('Andrey')

})
test('reducer should return array of people >= 18',()=>{

	const people = [
		{id: '1', name: 'Denis', age: 27},
		{id: '2', name: 'Andrey', age: 30},
		{id: '3', name: 'Lena', age: 18},
		{id: '4', name: 'Ivan', age: 12},
		{id: '5', name: 'Sasha', age: 14},
	]

	const payload = 18;

	const endState = homeWorkReducer(people, getAdultPeopleAC(payload))
	expect(endState.length).toBe(3)
	expect(endState[0].name).toBe('Denis')
	expect(endState[1].name).toBe('Andrey')
	expect(endState[2].name).toBe('Lena')
})