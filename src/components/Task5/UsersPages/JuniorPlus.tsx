import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {NavBar} from "../NavBar";
import classes from "./JuniorPlus.module.css";
import {Select} from "../../../common/Select/Select";
import {ItemsType} from "./Junior";
import {useDispatch} from "react-redux";
import {setThemeAC} from "../../../reducers/theme-reducer";
import {ThemeContext} from "../../../themes/themes";

export const JuniorPlus = () => {

	const theme = useContext(ThemeContext)
	const dispatch = useDispatch()

	const themes: Array<ItemsType> = useMemo(()=>{
		return(
			[
				{value: '1', item: 'light'},
				{value: '2', item: 'black'},
				{value: '3', item: 'green'}
			]
		)
	},[])

	const [webSiteTheme, setWebSiteTheme] = useState<string>(themes[0].value);
	const onChange = useCallback((selectValue: string):void => {
		setWebSiteTheme(selectValue)
	},[webSiteTheme])

	useEffect(()=>{
		dispatch(setThemeAC(webSiteTheme))
	},[webSiteTheme])

	return (
		<div className={classes.juniorPlus} style={theme}>
			<NavBar/>
			<div className={classes.container}>
				<div className={classes.juniorPlusContent}>
							<Select value={webSiteTheme} items={themes} onChange={onChange}/>
				</div>
			</div>
		</div>
	)
}