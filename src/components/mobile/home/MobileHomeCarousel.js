import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import Restaurant from "components/home/restaurant/Restaurant";


const useStyles = makeStyles((theme) => ({
	"@global":{
	},
	root: {
		"borderBottom": "8px solid #fafafa",
		"padding": "24px 0px",
	},
	listWrapper: {	
		"scrollBehavior": "smooth",
		"overflowX": "scroll",
		"scrollSnapType": "x mandatory",
		"WebkitOverflowScrolling": "touch",
		"paddingTop": "18px",
		"paddingBottom": "18px",
		"width": "100%",
		"MsOverflowStyle": "none",
		"MsScrollChaining": "none",
		"MsScrollSnapType": "mandatory",
		"MsScrollSnapPointsX": "snapInterval(0%, 100%)",
		"&::-webkit-scrollbar": {
			display:"none",
		},
	},	
	carouselWrapper: {
		"display": "flex",
		"position": "relative"	
	},	
	title: {
		"padding": "0px 12px",
		"fontSize": "28px",
		"fontWeight": "bold",
	},
	itemWrapper:{
		"flex": "0 0 auto",
		"paddingLeft": "12px"
	},
	restaurant:{	
		"height": "257px",
		"overflow": "hidden",
		"boxShadow": "0px 4px 12px rgba(0, 0, 0, 0.05)",
		"borderRadius": "20px",
		"width": "300px",
	},
}));

const title = (
	<FormattedMessage
		id="home.restaurantCarousel.NewItems"
		defaultMessage="New items of the week"
	/>
);

const MobileHomeCarousel = ({ restaurants }) => {

	const classes = useStyles();
	const carouselRef = React.useRef(null);

	
	return (
		<div className={classes.root}>
			<h2 className={classes.title}>{title}</h2>
			<div className={classes.listWrapper}>
				<div className={classes.carouselWrapper} ref={carouselRef}>
					{restaurants.map((item, index) => (
						<div className={classes.itemWrapper} key={index}><Restaurant restaurant={item} className={classes.restaurant}/></div>
					))}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	restaurants: state.restaurant.restaurants,
});

export default connect(mapStateToProps)(MobileHomeCarousel);
