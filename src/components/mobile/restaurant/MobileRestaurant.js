import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRestaurantProductCategories } from "store/restaurant";

import Head from "./MobileRestaurantHead";
import Header from "./MobileRestaurantHeader";
import Category from "./MobileRestaurantCategories";
import CategoryProductList from "./MobileRestaurantCategoryProductList";


const useStyles = makeStyles((theme) => ({
	root: {
		display: "block",
		backgroundColor: "#fafafa",
		"& .head": {
			height: "60px",
			background: "#ffffff",
			paddingTop: "8px",
		},
		"& .topbar": {
			display: "flex",
			padding: "0 8px",
			alignItems: "center",
			justifyContent: "space-between",
		},
		"& .backIcon": {
			padding: "22px",
			borderRadius: "99px",
			backgroundImage: "url(/static/images/icons/back.svg)",
			width: "24px",
			height: "24px",
			display: "inline-block",
		},
		"& .baseIcon": {
			backgroundSize: "24px 24px",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		},
		"& .headTitle": {
			padding: "0 10px",
			overflow: "hidden",
			textAlign: "center",
			fontWeight: "bold",
			whiteSpace: "nowrap",
			textOverflow: "ellipsis",
		},
		"& .searchIcon": {
			width: "24px",
			height: "24px",
			padding: "16px",
			marginRight: "2px",
			verticalAlign: "middle",
			backgroundSize: "24px 24px",
			backgroundImage: "url(/static/images/icons/search.svg)",
		},
		"& .header": {
			padding: "0 16px 16px 16px",
			background: "#ffffff",
		},
		"& .headerName": {
			color: "#3f3f3f",
			fontSize: "24px",
			lineHeight: "28px",
			fontWeight: "bold",
			paddingBottom: "12px",
		},
		"& .infoBadge": {
			top: "0",
			width: "28px",
			height: "28px",
			display: "inline-flex",
			overflow: "hidden",
			position: "relative",
			fontSize: "28px",
			boxShadow: "0 2px 16px 0px rgba(0, 0, 0, 0.07)",
			alignItems: "center",
			marginLeft: "5px",
			borderRadius: "14px",
			justifyContent: "center",
			backgroundColor: "#ffffff",
		},
		"& .infoIcon": {
			width: "16px",
			height: "16px",
			backgroundSize: "16px 16px",
			backgroundImage: "url(/static/images/restaurants/black-info.svg)",
		},
		"& .headerBadges": {
			left: "-2px",
			width: "calc(100% + 18px)",
			display: "flex",
			position: "relative",
			flexWrap: "wrap",
			fontSize: "15px",
			flexDirection: "row",
		},
		"& .headerBadge": {
			height: "36px",
			display: "inline-flex",
			padding: "9px 13px",
			boxShadow: "0 2px 16px 0px rgba(0, 0, 0, 0.07)",
			alignItems: "center",
			marginRight: "8px",
			marginBottom: "8px",
			borderRadius: "18px",
			flexDirection: "row",
			justifyContent: "center",
			cursor: "default",
		},
		"& .headerBadgeIcon": {
			left: "-2px",
			width: "20px",
			height: "20px",
			overflow: "hidden",
			position: "relative",
			marginRight: "2px",
			borderRadius: "10px",
			backgroundSize: "20px 20px",
		},
		"& .starIcon": {
			backgroundImage: "url(/static/images/restaurants/star.svg)",
		},
		"& .deliverIcon": {
			backgroundImage: "url(/static/images/restaurants/yellow-info.svg)",
		},
		"& .content": {
			minHeight: "100vh",
		},
		"& .category": {
			top: "97px",
			position: "sticky",
			zIndex: "5",
		},
		"& .categoryContent": {
			width: "100%",
			display: "flex",
			zIndex: "1",
			alignItems: "center",
			paddingTop: "10px",
			paddingBottom: "10px",
			justifyContent: "center",
			backgroundColor: "#ffffff",
		},
		"& .categoryCarousel": {
			height: "36px",
			width: "100%",
			position: "relative",
			overflow: "hidden",
		},
		"& .categoryCarouselScroll": {
			height: "50px",
			position: "relative",
			overflowY: "hidden",
			overflowX: "scroll",
			scrollBehavior: "smooth",
		},
		"& .categoryCarouselBubble": {
			height: "36px",
			position: "absolute",
			borderRadius: "18px",
			backgroundColor: "rgb(255, 224, 51)",
			transitionProperty: "width",
			transitionDuration: "200ms",
		},
		"& .categoryList": {
			display: "flex",
			position: "relative",
			alignItems: "center",
			flexDirection: "row",
			"list-style-type": "none",
		},
		"& .categoryListItem": {
			color: "#000000",
			height: "36px",
			opacity: "0.4",
			padding: "0 14px",
			display: "flex",
			fontSize: "15px",
			boxSizing: "border-box",
			lineHeight: "36px",
			whiteSpace: "nowrap",
			alignItems: "center",
			transitionProperty: "opacity",
			transitionDuration: "200ms",
		},
		"& .categoryProductList": {},
		"& .categoryProductItem": {
			backgroundColor: "#ffffff",
		},
		"& .productList": {
			display: "flex",
			padding: "3px 5px 24px 5px",
			flexWrap: "wrap",
			alignItems: "stretch",
		},
		"& .productListItem": {
			flex: "0 1 calc(50% - 11px * 1.5)",
			margin: "11px 0 0 11px",
			position: "relative",
			overflow: "hidden",
			minHeight: "266px",
			boxShadow: "0 4px 20px rgba(0, 0, 0, 0.07)",
			borderRadius: "20px",
		},
		"& .productImageLoaded": {
			backgroundImage: "none",
		},
		"& .productItemCoverRoot": {
			width: "100%",
			height: "166px",
		},
		"& .productItemImageRoot": {
			backgroundSize: "240px",
			backgroundImage:
				"url(/static/images/restaurants/fallback-pattern.svg)",
			backgroundColor: "#f5f5f5",
			backgroundPosition: "center",
		},
		"& .productItemCoverImage": {
			backgroundSize: "cover",
			backgroundPosition: "center",
		},
		"& .productItemName": {
			color: "#3f3f3f",
			display: "box",
			overflow: "hidden",
			fontSize: "15px",
			lineClamp: "3",
			wordBreak: "break-word",
			maxHeight: "45px",
			MozBoxOrient: "vertical",
		},
		"& .promoList": {
			width: "100%",
			display: "flex",
			flexWrap: "wrap",
			marginTop: "8px",
		},
		"& .promoListOnCover": {
			top: "12px",
			left: "12px",
			position: "absolute",
			marginTop: "0",
		},
		"& .productItemBottom": {
			left: "0",
			width: "100%",
			bottom: "12px",
			height: "34px",
			padding: "0 12px",
			display: "flex",
			position: "absolute",
			alignItems: "center",
			justifyContent: "space-between",
		},
		"& .promoListItem": {
			margin: "0 10px 10px 0",
			padding: "4px 6px",
			display: "flex",
			minWidth: "44px",
			background: "#83eabc",
			alignItems: "center",
			borderRadius: "16px",
			justifyContent: "center",
		},
		"& .promoImage": {
			height: "20px",
		},
		"& .productItemPrice": {
			color: "#3F3F3F",
			fontSize: "14px",
			lineHeight: "16",
		},
		"& .productItemPromoPrice": {
			color: "#4AC58E",
			fontSize: "14px",
			fontWeight: "bold",
		},
		"& .productItemOrigPromoPrice": {
			color: "#b0b0b0",
			fontSize: "12px",
			marginLeft: "4px",
		},
		"& .productItemStatusText": {
			color: "#e0e0e0",
			fontSize: "12px",
		},
		"& .productCategoryHeader": {
			display: "flex",
			position: "relative",
			paddingTop: "27px",
			alignItems: "center",
			paddingLeft: "24px",
			paddingRight: "24px",
			flexDirection: "row",
		},
		"& .productCategoryName": {
			flex: "1 auto",
			paddingBottom: "7px",
			color: "#3F3F3F",
			fontSize: "28px",
			lineHeight: "33px",
			fontWeight: "bold",
		},
		"& .image": {
			width: "100%",
			height: "100%",
		},
		"& .active": {
			opacity: "1",
		},
	},
}));


const MobileRestaurant = ({ getRestaurantData }) => {
  const classes = useStyles();

  useEffect(() => {
    getRestaurantData();
  }, [getRestaurantData]);

  return (
    <div className={classes.root}>
      <Head />
      <Header />
      <div className="content mt-2">
        <Category className="category" />
        <CategoryProductList className="categoryProductList" />
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRestaurantData: getRestaurantProductCategories,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(MobileRestaurant);
