import React, {useState} from "react";
import {NavBar} from "../NavBar";
import classes from "./JuniorPlus.module.css";
import {Select} from "../../../common/Select/Select";
import {ItemsType} from "./Junior";
import {useDispatch} from "react-redux";
import {setThemeAC} from "../../../reducers/theme-reducer";

export const JuniorPlus = () => {

	const dispatch = useDispatch()

	const themes: Array<ItemsType> = [
		{value: '1', item: 'white'},
		{value: '2', item: 'black'},
		{value: '3', item: 'green'}
	]
	const [theme, setTheme] = useState<string>(themes[0].value);

	const onChange = ((selectValue: string):void => {
		setTheme(selectValue);
	})

	dispatch(setThemeAC(theme))



	return (
		<div className={classes.juniorPlus}>
			<NavBar/>
			<div className={classes.container}>
				<div className={classes.juniorPlusContent}>
							<Select value={theme} items={themes} onChange={onChange}/>
				</div>
			</div>
		</div>
	)
}