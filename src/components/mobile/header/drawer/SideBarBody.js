import React from "react";
import { Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";

import { openDialog } from "store/dialog";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import RestaurantItem from "./RestaurantItem";
import SecondMenuItem from "./SecondMenuItem";
import MobileLogin from "components/mobile/user/login/MobileLogin";
import MobileUser from "components/mobile/user/MobileUser";

const useStyles = makeStyles((theme) => ({
	menuList: {
		background: "#ffffff",
		borderTop: "1px solid rgba(0,0,0,.05)",
		marginTop: "8px",
		borderBottom: "1px solid rgba(0,0,0,.05)",
		marginBottom: "8px",
	},
	divid: {
		backgroundColor: "rgba(0, 0, 0, 0.05)",
	},
	menuIcon: {
		width: "24px",
		height: " 24px",
		display: "inline-block",
		backgroundSize: "24px 24px",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	dialogPaper: {
		height: "100%",
		width: "100%",
		margin: 0,
		maxWidth: "none",
		borderRadius: 0,
	},
}));

const loginIcon = {
	src: "/static/images/header/login.svg",
	alt: "login",
};

const menuItems = [
	{ src: "#link", text: "О сервисе" },
	{ src: "#link", text: "Стать курьером" },
	{ src: "#link", text: "Стать партнёром" },
	{ src: "#link", text: "Вопросы и ответы" },
	{ src: "#link", text: "Переработка пластика" },
	{ src: "#link", text: "Пользовательское соглашение" },
];

const SideBarBody = ({ openDialog }) => {
	const classes = useStyles();
	const {id} = useSelector(state => state.user.userInfo);
	
	const dialog = () => {
		openDialog({
			children: <MobileLogin />,
			fullScreen: true,
			scroll: "body",
			classes: { paper: classes.dialogPaper },
		});
	};

	const LoginButton = () => (
		<button
			onClick={dialog}
			className="text-black flex items-center p-5 text-md w-full"
		>
			<div className={classes.menuIcon}>
				<img alt={loginIcon.alt} src={loginIcon.src} />
			</div>
			<div className="rtl:mr-2 ltr:ml-2">
				<FormattedMessage id="header.Login" defaultMessage="Login" />
			</div>
		</button>
	);
	
	return (
		<div className="w-full flex min-h-0 py-1">
			<div className="z-0 w-full overflow-x-auto overflow-y-auto">
				<div className={classNames(classes.menuList, "bg-white")}>
					<RestaurantItem />
					<Divider className={classes.divid} />
					{
						id ? <MobileUser /> : <LoginButton />
					}				
				</div>
				<div className={classNames(classes.menuList, "bg-white")}>
					{menuItems.map((item, index) => (
						<SecondMenuItem key={index} src={item.src} text={item.text} />
					))}
				</div>
			</div>
		</div>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			openDialog,
		},
		dispatch
	);
}

export default connect(null, mapDispatchToProps)(SideBarBody);
