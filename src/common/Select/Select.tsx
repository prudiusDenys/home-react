import React, {useState, KeyboardEvent, useEffect} from "react";
import classes from "./Select.module.css";
import {ItemsType} from "../../components/Task5/UsersPages/Junior";

type PropsType = {
	value: string
	items: Array<ItemsType>
	onChange: (selectValue: string) => void
}

export const Select = React.memo(function (props: PropsType){

	console.log('select')

	const [collapsed, setCollapsed] = useState(true);
	const [hoveredElement, setHoveredElement] = useState(props.value);

	const selectedItem = props.items.find(i => i.value === props.value)
	const hoveredItem = props.items.find(i => i.value === hoveredElement)

	const onClickHandler = () => {
		setCollapsed(!collapsed)
	}
	const onBlurHandler = () => {
		setCollapsed(true)
	}

	useEffect(() => {
		setHoveredElement(props.value)
	}, [props.value]);
	const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
		console.log(e.keyCode)
		if (e.keyCode === 40 || e.keyCode === 38) {
			for (let i = 0; i < props.items.length; i++) {
				if (props.items[i].value === hoveredElement) {
					const pretendentElement = e.keyCode === 40 ? props.items[i + 1] : props.items[i - 1];
					if (pretendentElement) {
						props.onChange(pretendentElement.value);
						return;
					}
				}
			}
			if (!selectedItem) {
				props.onChange(props.items[0].value)
			}
		}
		if (e.keyCode === 13 || e.keyCode === 27) {
			setCollapsed(true)
		}
	}

	const country = props.items.map(c => {

		const onMouseDownHandler = () => {
			props.onChange(c.value)
		}
		const onMouseEnterHandler = () => {
			setHoveredElement(c.value)
		}

		return (
			<div className={(hoveredItem === c) ? `${classes.country} ${classes.active}` : classes.country}
					 key={c.value}
					 onMouseDown={onMouseDownHandler}
					 onMouseEnter={onMouseEnterHandler}>{c.item}
			</div>
		)
	})
	return (
		<div className={classes.wrapper} tabIndex={0} onKeyDown={onKeyDownHandler}>
			<h3 className={classes.active}
					tabIndex={0}
					onClick={onClickHandler}
					onBlur={onBlurHandler}>{selectedItem && selectedItem.item}</h3>
			{
				!collapsed &&
        <div>
					{country}
        </div>
			}
		</div>
	)
})