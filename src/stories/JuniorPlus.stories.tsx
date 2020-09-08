import React from "react";
import {JuniorPlus} from "../components/Task5/UsersPages/JuniorPlus";
import classes from "../components/Task5/UsersPages/JuniorPlus.module.css";
import {Select} from "../common/Select/Select";
import {action} from "@storybook/addon-actions";
import {ItemsType} from "../components/Task5/UsersPages/Junior";


export default {
	title: 'Junior Plus ',
	component: JuniorPlus
}

export const JuniorPlusBaseExample = () => {

	const themes: Array<ItemsType> = [
		{value: '1', item: 'light'},
		{value: '2', item: 'black'},
		{value: '3', item: 'green'}
	]

	const callBack = action('changed')

	return (
		<div className={classes.juniorPlus}>
			<div className={classes.container}>
				<div className={classes.juniorPlusContent}>
					<Select value={'1'} items={themes} onChange={callBack}/>
				</div>
			</div>
		</div>
	)
}