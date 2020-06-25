import React from "react";
import classes from './Avatar.module.css'
import avatar from './avatar.jpg'

const Avatar = () => {
	return (
		<div className={classes.avatar}>
			<div className={classes.img}>
				<img src={avatar} alt=""/>
			</div>
		</div>
	)
}

export default Avatar;