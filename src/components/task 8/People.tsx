import React, {useReducer} from "react";
import classes from "./People.module.css";
import {Button} from "../../common/Button/Button";
import {getAdultPeopleAC, homeWorkReducer, sortPeopleDownAC, sortPeopleUpAC} from "./homeWorkReducer";

export const People = () => {


	const people = [
		{id: '1', name: 'Denis', age: 27},
		{id: '2', name: 'Andrey', age: 30},
		{id: '3', name: 'Ivan', age: 13},
		{id: '4', name: 'Misha', age: 9},
		{id: '5', name: 'Katya', age: 17},
		{id: '6', name: 'Sasha', age: 18},
	]

	const [state, dispatch] = useReducer(homeWorkReducer, people)

	const person = state.map(p => {
		return (
			<div key={p.id}>{p.name} {p.age}</div>
		)
	})

	const sortPeopleUpHandler = () => {
		dispatch(sortPeopleUpAC('up'))
	}
	const sortPeopleDownHandler = () => {
		dispatch(sortPeopleDownAC('down'))
	}
	const getAdultPeopleHandler = () => {
		dispatch(getAdultPeopleAC(18))
	}

	return (
		<div className={classes.wrapper}>
			<div>
				{person}
			</div>
			<div className={classes.btns}>
				<Button title={'Sort up'} onClickBtnHandler={sortPeopleUpHandler}/>
				<Button title={'Sort down'} onClickBtnHandler={sortPeopleDownHandler}/>
				<Button title={'Adult people'} onClickBtnHandler={getAdultPeopleHandler}/>
			</div>
		</div>
	)
}