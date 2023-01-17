import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { getRestaurants } from "store/restaurant";

import MobileHero from "./MobileHero";
import MobileLocation from "./MobileLocation";
import MobileCategory from "./MobileCategory";
import MobileSearchBox from "./MobileSearchBox";

import MobileHomeCarousel from "./MobileHomeCarousel";
import NextRestaurants from "components/home/restaurant/NextRestaurants";


const useStyles = makeStyles(() => ({
	root: {
		borderRadius: "4px 4px 0 0",
		background:"white",
	},
	main: {
		'padding':'20px 8px',		
	},
}));

const MobileHome = (props) => {

	const classes = useStyles();
	const dispatch = useDispatch();
	
	React.useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch]);
	
	return (
		<div className={classes.root}>
		
			<MobileHero />
			<MobileLocation />
			<MobileCategory />
			<MobileSearchBox />	
			<MobileHomeCarousel />
			<div className={classes.main}>
				<NextRestaurants />
			</div>
			
		</div>
	);
};
export default MobileHome;