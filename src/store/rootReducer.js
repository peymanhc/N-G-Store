import { combineReducers } from 'redux';

import currencyReducer from './currency';
import localeReducer from './locale';
import dialogReducer from './dialog';
import restaurantReducer from './restaurant';
import cityReducer from './city';
import locationReducer from './location';
import popoverReducer from './popover';
import timeReducer from "./time";
import menuReducer from "./menu";
import settingReducer from "./setting";
import profileReducer from "./profile";
import contactReducer from "./contact";
import landingReducer from "./landing";
import cartsReducer from "./carts/carts.reducer";
import betterforureducer from "./betterforu/betterforu.reducer";
import productReducer from './products/products.reducer'
import productDetail from './productDetail/productDetail.reducer'
import CategoryReducer from './category/category.reducer'
import SearchReducer from './search/search.reducer'
import cartreducer from './cart/cart.reducer'
import favoriteReducer from './favorite/favorite.reducer'
import AuthReducer from './auth/auth.reducer'
import BrandsReducer from './brands/brands.reducer'
import LayoutReducer from './layout/layout.reducer'
import MegaMenuReducer from './megaMenu/megaMenu.reducer'
import ProppertyReducer from './Property/Property.reducer'

export default combineReducers({
    currency	: currencyReducer,
    locale		  : localeReducer,
    dialog		  : dialogReducer,
    restaurant	  : restaurantReducer,
    city		  : cityReducer,
    location	  : locationReducer,
    popover		  : popoverReducer,
	timeList	  : timeReducer,
	menu		  : menuReducer,
	setting		  : settingReducer,
	profile		  : profileReducer,
	contact		  : contactReducer,
    landing		  : landingReducer,
    carts         : cartsReducer,
    betterforu    : betterforureducer,
    products      : productReducer,
    productDetail : productDetail,
    category      : CategoryReducer,
    Searchdata    : SearchReducer,
    cart          : cartreducer,
    favorite      : favoriteReducer,
    Auth          : AuthReducer,
    Brands        : BrandsReducer,
    Layout        : LayoutReducer ,
    megaMenu      : MegaMenuReducer,
    property      : ProppertyReducer

});
