import React, {useState} from "react";
import {NavBar} from "../NavBar";
import {PresCompForEditableSpan} from "../../Task6/PresCompForEditableSpan";
import {Select} from "../../../common/Select/Select";

export type CountriesType = {
	value: string
	country: string
}

export const Junior = () => {

	const countries: Array<CountriesType> = [
		{value: '1', country: 'Belarus'},
		{value: '2', country: 'Russia'},
		{value: '3', country: 'Ukraine'},
		{value: '4', country: 'Italy'},
	]

	const [value, setValue] = useState<string>(countries[0].value);

	const onChange = (selectValue: string) => {
		setValue(selectValue);
	}

	return (
		<div>
			<NavBar/>
			<PresCompForEditableSpan/>
			<Select value={value} items={countries} onChange={onChange}/>
		</div>
	)
}