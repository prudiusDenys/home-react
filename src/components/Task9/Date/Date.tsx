import React, {useState} from "react";
import classes from "./Date.module.css";
import {Button} from "../../../common/Button/Button";
import moment from "moment";
import {Tooltip} from "@material-ui/core";

export const Time = () => {

	const [timerId, setTimerId] = useState<number>(0)
	const [data, setData] = useState<string>(moment().format('HH:mm:ss'))

	const onClickStartHandler = () => {
		clearInterval(timerId)
		const timer_id = window.setInterval(() => setData(moment().format('HH:mm:ss')), 1000);
		setTimerId(timer_id)
	}

	const onClickStopHandler = () => {
		clearInterval(timerId)
	}

	return (
		<div className={classes.dateWrapper}>
			<Tooltip title={moment().format('MMMM Do YYYY')} placement="top-end" arrow={true}>
				<div className={classes.time}>
					{data}
				</div>
			</Tooltip>
			<div className={classes.btns}>
				<Button title={'Start update time'} onClickBtnHandler={onClickStartHandler}/>
				<Button title={'Stop update time'} onClickBtnHandler={onClickStopHandler}/>
			</div>
		</div>
	)
}