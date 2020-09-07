import React, {useCallback, useContext, useMemo, useState} from "react";
import classes from "./Junior.module.css";
import {NavBar} from "../NavBar";
import {PresCompForEditableSpan} from "../../Task6/PresCompForEditableSpan";
import {Select} from "../../../common/Select/Select";
import {Radio} from "../../../common/Radio/Radio";
import {People} from "../../task 8/People";
import {Time} from "../../Task9/Time";
import {Button} from "../../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../../../reducers/loading-reducer";
import {AppRootState} from "../../../store/store";
import {Preloader} from "../../../common/Preloader/Preloader";
import {Range} from "../../../common/Range/Range";
import {RangeDoubleSlider} from "../../../common/RangeDoubleSlider/RangeDoubleSlider";
import {ThemeContext} from "../../../themes/themes";

export type ItemsType = {
	value: string
	item: string
}
export type ContactMethodType = {
	id: string
	name: string
	value: string
	checked: boolean
}

export const Junior = () => {

	const theme = useContext(ThemeContext)

	const countries: Array<ItemsType> = useMemo(()=>{
		return (
			[
				{value: '1', item: 'Belarus'},
				{value: '2', item: 'Russia'},
				{value: '3', item: 'Ukraine'},
				{value: '4', item: 'Italy'},
			]
		)
	},[])

	const [value, setValue] = useState<string>(countries[0].value);

	const onChange = useCallback((selectValue: string) => {
		setValue(selectValue);
	}, [value])

/////////////////// RADIO ///////////////////////////////

	const [contactMethods, setContactMethods] = useState<Array<ContactMethodType>>([
		{id: '1', name: 'contact', value: 'Phone', checked: false},
		{id: '2', name: 'contact', value: 'Mobile phone', checked: false},
		{id: '3', name: 'contact', value: 'Email', checked: true},
		{id: '4', name: 'contact', value: 'Fax', checked: false},
	])

	const onChangeRadio = useCallback((id: string, checked: boolean) => {
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
	}, [contactMethods])

	//////////////////// TASK 10 ////////////////

	const dispatch = useDispatch()
	const loading = useSelector<AppRootState, boolean>(state => state.loading.loading)

	const getLoading = useCallback(() => {
		dispatch(setLoading(true))
		setTimeout(() => dispatch(setLoading(false)), 3000)
	}, [dispatch])

	/////////////////// TASK 11 /////////////////

	const [rangeValue, setRangeValue] = useState('50')

	const onRangeChange = useCallback((value: string) => {
		setRangeValue(value)
	}, [rangeValue])

	return (
		<div style={theme}>
			{!loading ?
				<div>
					<NavBar/>
					<PresCompForEditableSpan/>
					<Select value={value} items={countries} onChange={onChange}/>
					<Radio items={contactMethods} onChangeRadio={onChangeRadio}/>
					<People/>
					<Time/>
					<div className={classes.btn}>
						<Button onClickBtnHandler={getLoading} title={'loading'}/>
					</div>
					<div className={classes.range}>
						<Range minValue={'0'} maxValue={'100'} value={rangeValue} step={'10'} onChange={onRangeChange}/>
					</div>
							<RangeDoubleSlider/>
				</div>
				:
				<Preloader/>
			}
		</div>
	)
}