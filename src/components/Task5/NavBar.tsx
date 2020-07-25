import React, {useState} from "react";
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

export const NavBar = () => {

	const [showMenu, setShowMenu] = useState(false)

	const onClickHandler = () => {
		setShowMenu(!showMenu)
	}

	return (
		<div className={classes.navWrapper}>
			<div onClick={onClickHandler} className={classes.menu}>
				{showMenu ? <span className={`${classes.spanMenu} ${classes.spanMenuFocus}`}>Hide Menu</span>  : <span className={classes.spanMenu}>Show menu</span> }
			</div>
			<ul className={showMenu ? `${classes.navList} ${classes.showNav}` : classes.navList}>
				<NavLink exact to={'/'} className={classes.navLink} activeClassName={classes.active}>Home</NavLink>
				<NavLink to={'/preJunior'} className={classes.navLink} activeClassName={classes.active}>preJunior</NavLink>
				<NavLink to={'/junior'} className={classes.navLink} activeClassName={classes.active}>Junior</NavLink>
				<NavLink to={'/juniorPlus'} className={classes.navLink} activeClassName={classes.active}>Junior+</NavLink>
			</ul>
		</div>
	)
}