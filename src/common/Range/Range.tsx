import React, {ChangeEvent} from "react";
import classes from "./Range.module.css";

type PropsType = {
	minValue: string
	maxValue: string
	value: string
	step: string
	onChange: (value: string) => void
}

export const Range = React.memo((props: PropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChange(e.currentTarget.value)
	}

	return (
		<div className={classes.range}>
			<input onChange={onChangeHandler}
						 type="range"
						 id={'volume'}
						 name={'volume'}
						 min={props.minValue}
						 max={props.maxValue}
						 value={props.value}
						 step={props.step}/>
			<label htmlFor="volume">Volume:{props.value}%</label>
		</div>
	)
})