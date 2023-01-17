import React, {Fragment, useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { getRestaurants } from "store/restaurant";
import { Box, CircularProgress } from "@material-ui/core";
import PwaSlider from "../../../pages/restaurants_page/slider/PwaSlider";

import MobileLocation from "./MobileLocation";
import MobileCategory from "./MobileCategory";
import MobileSearchBox from "./MobileSearchBox";

import MobileHomeCarousel from "./MobileHomeCarousel";
import NextRestaurants from "components/home/restaurant/NextRestaurants";
import PwaMobileFooterRoot from "components/footer/MobileFooter/PwaMobileFooterRoot";

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: "4px 4px 0 0",
		background:"white",
	},
	main: {
		'padding':'20px 8px',		
	},
}));

const PwaMobileHome = (props) => {

	const classes = useStyles();
	const dispatch = useDispatch();
	const [Loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
		  setLoading(false);
		}, 2000);
	  }, [])
	React.useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch]);
	
	return (
		<Fragment>
			<div className={classes.root}>
				{Loading ?
					<Box display="flex" justifyContent="center" alignItems="center" marginTop="20px" >
					<CircularProgress style={{ color: "#fc0" }} />
					</Box> : <PwaSlider />}
				<MobileLocation />
				<MobileCategory />
				<MobileSearchBox />	
				<MobileHomeCarousel />
				<div className={classes.main}>
					<NextRestaurants />
				</div>
			</div>
			<div>
				<PwaMobileFooterRoot />
			</div>
		</Fragment>
		
	);
};
export default PwaMobileHome;