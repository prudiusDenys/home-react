import React, {ChangeEvent} from "react";
import classes from "./Radio.module.css";
import {ContactMethodType} from "../../components/Task5/UsersPages/Junior";

type PropsType = {
	items: Array<ContactMethodType>
	onChangeRadio: (id: string, checked: boolean) => void
}

export const Radio = React.memo(function (props: PropsType){
	console.log('radio')
	return (
		<div className={classes.radioWrapper}>
			{props.items.map(i => {

				const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
					props.onChangeRadio(i.id, e.currentTarget.checked)
				}

				return (
					<div key={i.id} className={classes.inputWrapper}>
						<input key={i.id}
									 id = {i.id}
									 onChange={onChangeHandler}
									 type="radio"
									 name={i.name}
									 value={i.value}
									 checked={i.checked}/>
						<label htmlFor={i.id}>{i.value}</label>
					</div>
				)
			})}
		</div>
	)
})