import React, { Fragment } from "react";
import { makeStyles, Hidden } from "@material-ui/core/";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// Layout
import Navbar from "components/layout/Navbar/Navbar";
import Footer from "components/layout/Footer/Footer";
import Appbar from "components/mobile/appbar/Appbar";
import Searchbar from "components/mobile/appbar/Searchbar";
import Search from "components/mobile/Search/Search";
import Topbar from "components/mobile/topbar/Topbar";

// Mobile Size
import Bonuses from "pages/mobile/bonuses/Bonuses";
import ProfileMobile from "pages/mobile/profile/ProfileMobile";
import AuthMobile from "pages/mobile/authMobile/AuthMobile";
import ProductMobile from "pages/mobile/ProductMobile/ProductMobile";
import WishesMobile from "pages/mobile/wishes/WishesMobile";
import FAQ from "pages/mobile/FAQ/FAQ";
import PaymentMobile from "pages/mobile/Payment/PaymentMobile";
import OrdersMobile from "pages/mobile/Orders/OrdersMobile";
import MobileLanding from "pages/mobile/landing/MobileLanding";
import MobileCart from "pages/mobile/cart/MobileCart";

// Desktop Size
import PaymentPage from "pages/paymentPage/PaymentPage";
import Response from "pages/response/Response";
import AllProducts from "pages/AllProducts/AllProducts";
import AboutUs from "pages/aboutUsPage/AboutUsPage";
import OrderPage from "pages/Orders_page/OrderPage";
import BonusesPage from "pages/BonusesPage/BonusesPage";
import AllProductsPage from "pages/AllProductsPage/AllProductsPage";
import Profile from "pages/Profile/Profile";
import NotFound from "pages/NotFound/NotFound";
import Auth from "pages/auth/Auth";
import ResaturantsPage from "pages/restaurants_page/ResaturantsPage";
import CartPage from "pages/cart_page/CartPage";
import Wishlist from "pages/wishlist_page/Wishlist";
import ProductsPage from "pages/productPage/ProductsPage";

const useStyles = makeStyles(() => ({
  defaultLayout: {
    width: "100%",
    maxWidth: 1400,
    marginBottom: 8,
    margin: "auto",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  return (
    <Fragment>
      {/* Desktop Size */}
      <Hidden smDown>
        <Switch>
          <Route
            path={`${path}/shop`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <ResaturantsPage {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Cart`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <CartPage {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Product/:slug?/:id`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <ProductsPage {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/wishlist`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <Wishlist {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Products/:property/:page`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <AllProducts {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Payment`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <PaymentPage {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/SeeAll/:id`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <AllProductsPage {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/AboutUs`}
            render={(props) => (
              <>
                <Navbar />
                <AboutUs {...props} />
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Profile`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <Profile {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Successfully`}
            render={(props) => (
              <>
                <Navbar />
                <Response {...props} />
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Orders`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <OrderPage {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Bonous`}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <BonusesPage {...props} />
                </div>
                <Footer />
              </>
            )}
          />
          <Route
            path={`${path}/Login`}
            render={(props) => <Auth {...props} />}
          />
          <Route
            path={``}
            render={(props) => (
              <>
                <Navbar />
                <div className={classes.defaultLayout}>
                  <NotFound {...props} />
                </div>
                <Footer />
              </>
            )}
          />
        </Switch>
      </Hidden>
      {/* Mobile Size */}
      <Hidden mdUp>
        <Switch>
          <Route
            exact
            path={`${path}/shop`}
            render={(props) => (
              <>
                <Appbar />
                <Searchbar />
                <MobileLanding {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/Search`}
            render={(props) => (
              <>
                <Appbar />
                <Searchbar />
                <Search {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/Bonous`}
            render={(props) => (
              <>
                <Appbar />
                <Topbar title={"Bonuses"} />
                <Bonuses {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/Cart`}
            render={(props) => (
              <>
                <Appbar />
                <Topbar title={"My Cart"} />
                <MobileCart {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/Profile`}
            render={(props) => (
              <>
                <Appbar />
                <Topbar title={"My Profile"} />
                <ProfileMobile {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/Login`}
            render={(props) => (
              <>
                <Appbar />
                <Topbar title={"Login/Register"} />
                <AuthMobile {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/Payment`}
            render={(props) => (
              <>
                <Appbar />
                <Topbar title={"Payment"} />
                <PaymentMobile {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/wishlist`}
            render={(props) => (
              <>
                <Appbar />
                <Topbar title={"Wishes"} />
                <WishesMobile {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/FAQ`}
            render={(props) => (
              <>
                <Appbar />
                <Topbar title={"FAQ"} />
                <FAQ {...props} />
              </>
            )}
          />
          <Route
            exact
            path={`${path}/AboutUs`}
            render={(props) => (
              <div style={{ margin: "50px 0" }}>
                <Appbar />
                <Topbar title={"AboutUs"} />
                <AboutUs {...props} />
              </div>
            )}
          />
          <Route
            exact
            path={`${path}/Orders`}
            render={(props) => (
              <div style={{ margin: "50px 0" }}>
                <Appbar />
                <Topbar title={"My Orders"} />
                <OrdersMobile {...props} />
              </div>
            )}
          />
          <Route
            path={`${path}/Product/:slug?/:id`}
            render={(props) => (
              <>
                <Appbar />
                <ProductMobile {...props} />
              </>
            )}
          />
          <Route
            path={`${path}/Successfully`}
            render={(props) => (
              <>
                <Appbar />
                <Response {...props} />
                <Topbar title={"Payment is done"} />
              </>
            )}
          />
          <Route
            path={``}
            render={(props) => (
              <>
                <Appbar />
                <Searchbar />
                <NotFound {...props} />
              </>
            )}
          />
        </Switch>
      </Hidden>
    </Fragment>
  );
};

export default Layout;
