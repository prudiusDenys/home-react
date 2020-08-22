import React, {useState} from "react";
import {NavBar} from "../NavBar";
import {PresCompForEditableSpan} from "../../Task6/PresCompForEditableSpan";
import {Select} from "../../../common/Select/Select";
import {Radio} from "../../../common/Radio/Radio";
import {People} from "../../task 8/People";
import {Time} from "../../Task9/Time";

export type CountriesType = {
	value: string
	country: string
}
export type ContactMethodType = {
	id: string
	name: string
	value: string
	checked: boolean
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

/////////////////// RADIO ///////////////////////////////

	const [contactMethods, setContactMethods] = useState<Array<ContactMethodType>>([
		{id: '1', name: 'contact', value: 'Phone', checked: false},
		{id: '2', name: 'contact', value: 'Mobile phone', checked: false},
		{id: '3', name: 'contact', value: 'Email', checked: true},
		{id: '4', name: 'contact', value: 'Fax', checked: false},
	])

	const onChangeRadio = (id: string, checked: boolean) => {
		const copyContactMethods = contactMethods.map(r => {
			if (r.checked) {
				return {
					...r,
					checked: false
				}
			}
			return r;
		})

		const contactMethod = copyContactMethods.find(r => r.id === id)
		if (contactMethod) {
			contactMethod.checked = checked
			setContactMethods([...copyContactMethods])
		}
	}

	////////////// TASK 8 /////////////////////////////////



	return (
		<div>
			<NavBar/>
			<PresCompForEditableSpan/>
			<Select value={value} items={countries} onChange={onChange}/>
			<Radio items={contactMethods} onChangeRadio={onChangeRadio}/>
			<People/>
			<Time/>
		</div>
	)
}

