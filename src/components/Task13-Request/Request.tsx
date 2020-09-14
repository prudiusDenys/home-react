import React, {useCallback, useState} from "react";
import {requestsAPI, ResponseTypeData} from "../../api/requestsAPI";
import {Button} from "../../common/Button/Button";
import {Checkbox} from "../../common/Checkbox/Checkbox";

export const Request = React.memo(() =>  {

	const [checkbox, setCheckBox] = useState<boolean>(false)
	const [state, setState] = useState<ResponseTypeData  | string>('do request for the Server')

	const getCheckBoxValue = useCallback(() => {
		setCheckBox(!checkbox)
	},[checkbox])

	const changeCheckboxValue = useCallback(() => {
		requestsAPI.createRequestAPI(checkbox)
			.then((res) => {
				setState(res.data)
			})
			.catch(error => {
				setState(error)
			})
	},[checkbox])

	return (
		<div>
			<Button title={'Request'} onClickBtnHandler={changeCheckboxValue}/>
			<Checkbox checkbox={checkbox} onClickCheckbox={getCheckBoxValue}/>
			{JSON.stringify(state)}
		</div>
	)
})