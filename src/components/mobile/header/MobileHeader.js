import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
	IconButton,
	SwipeableDrawer,
	Icon,
	Box,
} from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openMenu } from "store/menu";

import classNames from "classnames";

import HeaderDrawer from "./drawer/HeaderDrawer";
import HeaderLogo from "components/header/HeaderLogo";
import TimeList from "./TimeList";

const MenuIcon = () => <Icon>menu</Icon>;

const useStyles = makeStyles(() => ({
	appBar: {
		color: "black",
		background: "white",
		boxShadow: " 0 1px 0 0 rgba(0,0,0,.05)",
	},
	timeIcon: {
		fontSize: 29,
		color: "#e5e5e5",
		cursor: "pointer",
		zIndex: 10,
		position: "relative",
	},
	black: { color: "black" },
	addressBtn: {
		border: "none",
		height: "40px",
		display: "flex",
		position: "relative",
		overflow: "hidden",
		fontSize: "14px",
		textAlign: "center",
		background: "rgb(255, 224, 51)",
		boxShadow:
			"0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
		transition: "background 200ms",
		paddingTop: "0",
		alignItems: "center",
		lineHeight: "40px",
		fontWeight: "500",
		userSelect: "none",
		paddingLeft: "20px",
		paddingRight: "20px",
		borderRadius: "100px",
		paddingBottom: "0",
		justifyContent: "center",
		flex: "0 1 250px",
		color: "#443c0f",
	},
	selectedTime: {
		position: "relative",
		"&:before": {
			top: "50%",
			left: "50%",
			width: "22px",
			height: "22px",
			content: '""',
			display: "block",
			position: "absolute",
			transform: "translate(-50%, -50%)",
			background: "rgb(255, 224, 51)",
			boxShadow:
				"0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
			borderRadius: "100%",
		},
	},
}));

const MobileHeader = ({ openMenu, selectionAction }) => {
	const classes = useStyles();
	const anchor = "left";
	const inputEl = React.useRef(null);
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setOpen((open) => !open);
	};

	const menu = (event) => {
		openMenu(event.currentTarget, {
			children: <TimeList />,
			classes: { paper: "w-48 h-auto" },
		});
	};

	return (
		<Fragment>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				onClick={toggleDrawer}
				edge="start"
				className={classNames(classes.menuButton)}
			>
				<MenuIcon />
			</IconButton>
			<SwipeableDrawer
				anchor={anchor}
				open={open}
				onClose={toggleDrawer}
				onOpen={toggleDrawer}
				ModalProps={{
					keepMounted: true,
				}}
				ref={inputEl.current}
			>
				<HeaderDrawer toggleDrawer={toggleDrawer} />
			</SwipeableDrawer>
			<div className="w-full text-base my-4">
				<div className="flex flex-row justify-between">
					<Box className="mx-auto">
						<HeaderLogo />
					</Box>
					<Box className={classNames({ [classes.selectedTime]: selectionAction })}>
						<Icon className={classNames(classes.timeIcon,{[classes.black]:selectionAction})} onClick={menu}>
							access_time
						</Icon>
					</Box>
				</div>
			</div>
		</Fragment>
	);
};

function mapStateToProps(state) {
	return {
		selectionAction: state.menu.selectionAction,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			openMenu,
		},
		dispatch
	);
}


export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);