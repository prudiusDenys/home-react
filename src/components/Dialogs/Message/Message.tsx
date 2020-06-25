import React from "react";
import classes from './Message.module.css'
import Avatar from "../Avatar/Avatar";


type propsType = {
	name: string,
	text: string
}

const Message = (props: propsType) => {
	return (
		<div className={classes.messageWrapper}>
			<Avatar/>
			<div className={classes.message}>
				<div className={classes.name}>
					{props.name}
				</div>
				<div className={classes.text}>
					{props.text}
				</div>
				<div className={classes.time}>
					20:00
				</div>
			</div>
		</div>
	)
}
export default Message;