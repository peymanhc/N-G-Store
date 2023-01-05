import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import BigCard from "components/bigCard/BigCard";
import CardPost from "components/cardPost/CardPost";
import Categories from "components/categories/Categories";
import Posts from "components/posts/Posts";
import Slider from "components/slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import SubCategories from "components/SubCategories/SubCategories";
import { FormattedMessage } from "react-intl";
import Streetbanner from "components/StreetBanner/Streetbanner";
import OffStreetbanner from "components/StreetBanner/OffStreetbanner";
import DiscountCart from "components/discountCart/DiscountCart";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Count from "components/discountCart/Count";
import testimg from "images/testbanner.png";
import testbanner2 from "images/testbanner2.png";
import RecommentedCard from "components/Recommented_Card/RecommentedCard";
import { getCarts } from "store/cart/cart.action";
import { getBrands, getSlider } from "store/brands/brands.action";
import {
  getonlyTodayData,
  getCateOneData,
  getCateThreeData,
  getCateTwoData,
  getDaylyBannerData,
  getdiscount30Data,
  getDiscountTimerData,
  getNewItemsData,
  getRecommentedData,
  getTFBannerData,
  getTopBanner,
} from "store/layout/layout.action";
import { getProperty } from "store/Property/Property.action";
import { getBetterForU } from "store/betterforu/betterforu.action";
import { getProducts } from "store/products/products.action";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  title: {
    fontSize: 25,
    fontWeight: 700,
    textTransform: "capitalize",
    textAlign: "center",
  },
  todayoff: {
    backgroundColor: "#fc0",
    width: "100%",
    height: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  },
  todayofftext: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 900,
    textAlign: "center",
  },
  todayoff2: {
    content: "''",
    borderTop: "65px solid #fc0",
    borderRight: "380px solid transparent",
    [theme.breakpoints.down("md")]: {
      borderRight: "0px solid transparent",
    },
  },
  wowtext: {
    textAlign: "center",
    marginTop: -80,
    backgroundColor: "transparent",
    color: "#f73d34",
    fontSize: 70,
    fontWeight: 900,
    letterSpacing: -4.5,
    transform: "rotate(-11deg)",
    [theme.breakpoints.down("md")]: {
      transform: "rotate(0deg)",
      backgroundColor: "#fc0",
    },
  },
  offbanner: {
    margin: "50px 0",
    width: "100%",
    height: 400,
    objectFit: "cover",
  },
  brand: {
    border: "1px solid rgba(0,0,0,0.2)",
    padding: "20px 10px",
    height: "120px",
    margin: "0 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imgslider: {
    width: "100%",
    height: 300,
    padding: 1,
    objectFit: "cover",
  },
  offcard: {
    position: "relative",
    marginTop: "10px",
    padding: "0 10px",
  },
  boldbanner: {
    fontWeight: 800,
    color: "#293479",
  },
  discountBox: {
    backgroundColor: "#d83756",
    color: "white",
    width: "100%",
    padding: "20px 100px",
    position: "relative",
    margin: "30px 0",
  },
  discounttitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "white",
  },
  seeallbtn: {
    color: "black",
    backgroundColor: "white",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    padding: "5px 10px",
    position: "absolute",
    bottom: 30,
    "&:hover": {
      backgroundColor: "white",
    },
  },
  brandimage: {
    width: "100%",
    height: 250,
    margin: "0 5px",
    objectFit: "cover",
    border: "1px solid rgba(0,0,0,0.2)",
  },
  brandtxt: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: 800,
    marginTop: 5,
  },
  seeAllProductsBtn: {
    backgroundColor: "#fc0",
    color: "black",
    padding: "10px",
    width: "200px",
    margin: "10px 10px",
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
}));

const ResaturantsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city" });
  const betterforu = useSelector((state) => state.betterforu);
  const category = useSelector((state) => state.category);
  const Brands = useSelector((state) => state.Brands);
  const layout = useSelector((state) => state.Layout);
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(
      getTopBanner(
        match.params.language,
        match.params.city,
        "top_header_banner"
      )
    );
    dispatch(
      getBetterForU(match.params.language, match.params.city, "better_for_you")
    );
    dispatch(getProducts(match.params.city, match.params.language));
    dispatch(
      getCarts(profile?.detail?.data[0].id, match.params.language, "cart")
    );
    dispatch(
      getDaylyBannerData(
        match.params.language,
        match.params.city,
        "discount_baner_daily"
      )
    );
    dispatch(getProperty(match.params.city, match.params.language));
    dispatch(
      getonlyTodayData(match.params.language, match.params.city, "only_today")
    );
    dispatch(getBrands(match.params.language, match.params.city));
    dispatch(getSlider(match.params.language, match.params.city));
    dispatch(
      getTFBannerData(
        match.params.language,
        match.params.city,
        "discount_baner_25"
      )
    );
    dispatch(
      getRecommentedData(
        match.params.language,
        match.params.city,
        "recommented_for_you"
      )
    );
    dispatch(
      getDiscountTimerData(
        match.params.language,
        match.params.city,
        "discount_list_timer"
      )
    );
    dispatch(
      getdiscount30Data(
        match.params.language,
        match.params.city,
        "discount_baner_30"
      )
    );
    dispatch(
      getCateOneData(
        match.params.language,
        match.params.city,
        "categoty_one_item"
      )
    );
    dispatch(
      getCateTwoData(
        match.params.language,
        match.params.city,
        "categoty_tow_item"
      )
    );
    dispatch(
      getCateThreeData(
        match.params.language,
        match.params.city,
        "categoty_tree_item"
      )
    );
    dispatch(
      getNewItemsData(match.params.language, match.params.city, "new_products")
    );
    setTimeout(() => {
      window.scroll(0, 0);
    }, 500);
  }, []);
  return (
    <div className={classes.root}>
      {layout?.loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="70vh"
        >
          <CircularProgress
            style={{ width: "100px", height: "100px", color: "#fc0" }}
          />
        </Box>
      ) : (
        <>
          {Brands?.loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="20px"
            >
              <CircularProgress style={{ color: "#fc0" }} />
            </Box>
          ) : (
            <>
              <Slider ItemsToShow={1} ItemsToShowMobile={1} dots={true}>
                {Brands?.slider?.data?.map((item, i) => {
                  return (
                    <div className="cursor-pointer p-2" key={i}>
                      <img
                        alt="slide"
                        className={classes.imgslider}
                        src={`https://nandwsouk.com/${item.imageSrc}`}
                      />
                    </div>
                  );
                })}
              </Slider>
              <Slider ItemsToShow={8} ItemsToShowMobile={4} dots={false}>
                {category?.category?.categories?.map((item, i) => (
                  <SubCategories
                    key={i}
                    image={item.imageSrc}
                    title={item.title}
                  />
                ))}
              </Slider>
            </>
          )}
          <OffStreetbanner
            bgColor={"#ecedef"}
            color="white"
            text1={
              <>
                <b className={classes.boldbanner}>25%</b> off selected full
                price items.
                <br /> Additions<b className={classes.boldbanner}>5%</b> off
                sale items.
              </>
            }
            text2={
              <>
                When you pay using your{" "}
                <b className={classes.boldbanner}>Emirates NBD</b> Card
              </>
            }
            textSize="20px"
            discount1={"Emirates NBD"}
            discount2={"Use code : ENBD"}
          />
          <Streetbanner
            bgColor={"#d12930"}
            color="white"
            ProductName={"Street banner"}
            buyBtn={"Shop Now"}
            imgRight={testbanner2}
            imgLeft={testimg}
          />
          <Streetbanner
            bgColor={"#e0dcd3"}
            color="#037e35"
            textSize="40px"
            ProductName={"Stan smith, for ever"}
            buyBtn={"Shop Now"}
            imgLeft={testbanner2}
            imgRight={testimg}
          />
          <Typography
            style={{ marginTop: 50 }}
            className={classes.title}
            variant="h3"
          >
            <FormattedMessage
              id="better.for.you"
              defaultMessage="better for you"
            />
          </Typography>
          <Link to={`${match.url}/SeeAll/better-for-you`}>
            <Button className={classes.seeAllProductsBtn}>
              See All Products
            </Button>
          </Link>
          <Divider />
          {layout?.loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="20px"
            >
              <CircularProgress style={{ color: "#fc0" }} />
            </Box>
          ) : (
            <Posts itemsDesktop={5}>
              {betterforu?.data?.data !== undefined &&
                betterforu?.data?.data[0]?.products?.map((item, i) => (
                  <CardPost
                    key={i}
                    id={item.productDetails.id}
                    slug={
                      match.params.language === "en"
                        ? item.productDetails.translate.en
                        : match.params.language === "ar"
                        ? item.productDetails.translate.ar
                        : match.params.language === "fr"
                        ? item.productDetails.translate.fr
                        : "not-valid"
                    }
                    image={
                      item?.productDetails?.images[0]?.url
                        ? item?.productDetails?.images[0]?.url
                        : ""
                    }
                    price={item?.product_price}
                    ratednumber={item.productDetails.like}
                    rate={item.productDetails.taxRate}
                    title={item.product_name}
                    recommend={item.product_discount}
                    lastprice={item.product_after_discount}
                    translateslug={item.productDetails.translate.en}
                  />
                ))}
            </Posts>
          )}
          <Box style={{ backgroundColor: "#fffad0", padding: "20px 10px" }}>
            <Typography
              style={{
                borderBottom: "1px solid #2daf32",
                width: 300,
                margin: "auto",
                marginBottom: "30px",
              }}
              className={classes.title}
              variant="h3"
            >
              <FormattedMessage
                id="Popular.Categories"
                defaultMessage="Popular Categories"
              />
            </Typography>
            <Grid className="justify-center" container>
              {category.loading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  marginTop="20px"
                >
                  <CircularProgress style={{ color: "#fc0" }} />
                </Box>
              ) : (
                <>
                  {category?.data?.map((item, i) => (
                    <Grid
                      key={i}
                      style={{ padding: "0 10px" }}
                      item
                      xs={12}
                      sm={6}
                      md={2}
                    >
                      <Categories image={item.imageSrc} title={item.title} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Box>
          <Grid style={{ marginTop: "50px"}} container>
            <Grid className={classes.offcard} item xs={12} md={4}>
              <Box className={classes.todayoff}>
                <Typography className={classes.todayofftext}>
                  {" "}
                  <FormattedMessage
                    id="only-today"
                    defaultMessage="only today"
                  />
                </Typography>
              </Box>
              <Box className={classes.todayoff2}></Box>
              <Typography className={classes.wowtext}>Wow!</Typography>
              <BigCard
                key={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.productDetails.id
                }
                id={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.productDetails.id
                }
                image={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.productDetails
                    ?.images[0]?.url
                }
                price={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.product_price
                }
                lastprice={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]
                    ?.product_after_discount
                }
                ratednumber={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.productDetails.like
                }
                title={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.product_name
                }
                recommend={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.productDetails.like
                }
                slug={
                  layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products[2]?.productDetails
                    .translate.en
                }
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container>
                {layout?.onlyToday?.data !== undefined &&
                  layout?.onlyToday?.data[0]?.products?.map((item, i) => (
                    <Grid key={i} item xs={12} sm={4} md={4} lg={3}>
                      <CardPost
                        key={i}
                        id={item.productDetails.id}
                        slug={
                          match.params.language === "en"
                            ? item.productDetails.translate.en
                            : match.params.language === "ar"
                            ? item.productDetails.translate.ar
                            : match.params.language === "fr"
                            ? item.productDetails.translate.fr
                            : "not-valid"
                        }
                        image={
                          item?.productDetails?.images[0]?.url
                            ? item?.productDetails?.images[0]?.url
                            : ""
                        }
                        price={item?.product_price}
                        ratednumber={item.productDetails.like}
                        rate={item.productDetails.taxRate}
                        title={item.product_name}
                        recommend={item.product_discount}
                        lastprice={item.product_after_discount}
                        translateslug={item.productDetails.translate.en}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
          {layout?.discountList?.data?.length === 0 ? null : (
            <Grid className={classes.discountBox} container>
              <Grid item sm={12} md={4} lg={2}>
                <Typography className={classes.discounttitle}>
                  Exciting discounts +
                </Typography>
                <Typography className={classes.discounttitle}>
                  free delivery
                </Typography>
                <Link to={`${match.url}/SeeAll/DaylyOff`}>
                  <Button className={classes.seeallbtn}>
                    See All <ArrowRightAltIcon style={{ margin: "0 5px" }} />
                  </Button>
                </Link>
                <Box marginTop="70px">
                  <Count />
                </Box>
              </Grid>
              <Grid item sm={12} md={8} lg={10}>
                <Posts itemsDesktop={4}>
                  {layout?.discountList?.data !== undefined &&
                    layout?.discountList?.data[0]?.products?.map((item, i) => (
                      <DiscountCart
                        key={i}
                        id={item.productDetails.id}
                        slug={
                          match.params.language === "en"
                            ? item.productDetails.translate.en
                            : match.params.language === "ar"
                            ? item.productDetails.translate.ar
                            : match.params.language === "fr"
                            ? item.productDetails.translate.fr
                            : "not-valid"
                        }
                        image={
                          item?.productDetails?.images[0]?.url
                            ? item?.productDetails?.images[0]?.url
                            : ""
                        }
                        price={item?.product_price}
                        ratednumber={item.productDetails.like}
                        rate={item.productDetails.taxRate}
                        title={item.product_name}
                        recommend={item.product_discount}
                        lastprice={item.product_after_discount}
                        translateslug={item.productDetails.translate.en}
                      />
                    ))}
                </Posts>
              </Grid>
            </Grid>
          )}
          {layout?.onlyToday?.data !== undefined && (
            <Link
              to={`${match.url}/product/${
                layout?.onlyToday?.data === undefined
                  ? null
                  : layout?.onlyToday?.data[0].products[0].productDetails.slug
              }/${
                layout?.onlyToday?.data === undefined
                  ? null
                  : layout?.onlyToday?.data[0].products[0].productDetails.id
              }`}
            >
              <img
                src={`https://nandwsouk.com/${
                  layout?.onlyToday?.data === undefined
                    ? null
                    : layout?.onlyToday?.data[0].images[0].url
                }`}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
                alt="off"
              />
            </Link>
          )}
          {layout?.TFbanner?.data !== undefined && (
            <Link
              to={`${match.url}/product/${
                layout?.TFbanner?.data === undefined
                  ? null
                  : layout?.TFbanner?.data[0].products[0].productDetails.slug
              }/${
                layout?.TFbanner?.data === undefined
                  ? null
                  : layout?.TFbanner?.data[0].products[0].productDetails.id
              }`}
            >
              <img
                src={`https://nandwsouk.com/${
                  layout?.TFbanner?.data === undefined
                    ? null
                    : layout?.TFbanner?.data[0].images[0].url
                }`}
                className={classes.offbanner}
                alt="off"
              />
            </Link>
          )}
          {layout?.recommented?.data?.length === 0 ? null : (
            <>
              <Typography
                style={{ marginTop: 50 }}
                className={classes.title}
                variant="h3"
              >
                <FormattedMessage
                  id="recommented.for.you"
                  defaultMessage="recommented for you"
                />
              </Typography>
              <Link to={`${match.url}/SeeAll/recommented-for-you`}>
                <Button className={classes.seeAllProductsBtn}>
                  See All Products
                </Button>
              </Link>
              <Divider />
            </>
          )}
          <Box className="my-8">
            <Posts itemsDesktop={5}>
              {layout?.recommented?.data !== undefined &&
                layout?.recommented?.data[0]?.products?.map((item, i) => (
                  <RecommentedCard
                    key={i}
                    id={item.productDetails.id}
                    slug={
                      match.params.language === "en"
                        ? item.productDetails.translate.en
                        : match.params.language === "ar"
                        ? item.productDetails.translate.ar
                        : match.params.language === "fr"
                        ? item.productDetails.translate.fr
                        : "not-valid"
                    }
                    image={
                      item?.productDetails?.images[0]?.url
                        ? item?.productDetails?.images[0]?.url
                        : ""
                    }
                    price={item?.product_price}
                    ratednumber={item.productDetails.like}
                    rate={item.productDetails.taxRate}
                    title={item.product_name}
                    recommend={item.product_discount}
                    lastprice={item.product_after_discount}
                    translateslug={item.productDetails.translate.en}
                  />
                ))}
            </Posts>
          </Box>
          <Typography style={{marginBottom:"20px"}} className={classes.title} variant="h3">
            <FormattedMessage
              id="Popular.brands"
              defaultMessage="Popular brands"
            />
          </Typography>
          <Posts itemsDesktop={7}>
            {Brands?.brands?.data?.map((item, i) => (
              <Box key={i} className={classes.brand}>
                <img
                  style={{ height: 95 }}
                  alt="brand"
                  src={`https://nandwsouk.com/${item.imageSrc}`}
                />
              </Box>
            ))}
          </Posts>
          {layout?.discount30banner?.data !== undefined && (
            <img
              src={`https://nandwsouk.com/${layout?.discount30banner?.data[0]?.images[0]?.url}`}
              className={classes.offbanner}
              alt="off"
            />
          )}
          {layout?.newItems?.data?.length === 0 ? null : (
            <>
              <Typography
                style={{ marginTop: 50 }}
                className={classes.title}
                variant="h3"
              >
                <FormattedMessage
                  id="new.products"
                  defaultMessage="new products"
                />
              </Typography>
              <Link to={`${match.url}/SeeAll/new-products`}>
                <Button className={classes.seeAllProductsBtn}>
                  See All Products
                </Button>
              </Link>
              <Divider />
            </>
          )}
          <Box className="my-8">
            <Posts itemsDesktop={5}>
              {layout?.newItems?.data !== undefined &&
                layout?.newItems?.data[0]?.products?.map((item, i) => (
                  <RecommentedCard
                    key={i}
                    id={item.productDetails.id}
                    slug={
                      match.params.language === "en"
                        ? item.productDetails.translate.en
                        : match.params.language === "ar"
                        ? item.productDetails.translate.ar
                        : match.params.language === "fr"
                        ? item.productDetails.translate.fr
                        : "not-valid"
                    }
                    image={
                      item?.productDetails?.images[0]?.url
                        ? item?.productDetails?.images[0]?.url
                        : ""
                    }
                    price={item?.product_price}
                    ratednumber={item.productDetails.like}
                    rate={item.productDetails.taxRate}
                    title={item.product_name}
                    recommend={item.product_discount}
                    lastprice={item.product_after_discount}
                    translateslug={item.productDetails.translate.en}
                  />
                ))}
            </Posts>
          </Box>
          <Box width="100%" margin="30px 0" display="flex" alignItems="center">
            <Box padding="5px" width="100%">
              {layout?.onecate?.data !== undefined && (
                <Link
                  to={`${match.url}/Products/${layout.onecate.data[0].info}/page=1`}
                  className={classes.root}
                >
                  <img
                    alt="discount"
                    src={`https://nandwsouk.com/${layout?.onecate?.data[0]?.images[0]?.url}`}
                    className={classes.brandimage}
                  />
                </Link>
              )}
            </Box>
          </Box>
          <Box width="100%" marginTop="30px" display="flex" alignItems="center">
            {layout?.twocate?.data !== undefined &&
              layout?.twocate?.data[0]?.products?.map((item, i) => (
                <Box key={i} padding="5px" width="100%">
                  <Link
                    to={`${match.url}/Products/${layout.twocate.data[0].info}/page=1`}
                    className={classes.root}
                  >
                    <img
                      alt="discount"
                      src={
                        item?.productDetails?.images[0]?.url
                          ? `https://nandwsouk.com/${item?.productDetails?.images[0]?.url}`
                          : ""
                      }
                      className={classes.brandimage}
                    />
                  </Link>
                </Box>
              ))}
          </Box>
          <Box width="100%" display="flex" alignItems="center">
            {layout?.threecate?.data !== undefined &&
              layout?.threecate?.data[0]?.products?.map((item, i) => (
                <Box
                  key={i}
                  padding="5px"
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Link
                    to={`${match.url}/Products/${layout.threecate.data[0].info}/page=1`}
                    style={{ width: "100%" }}
                  >
                    <img
                      alt="discount"
                      src={
                        item?.productDetails?.images[0]?.url
                          ? `https://nandwsouk.com/${item?.productDetails?.images[0]?.url}`
                          : ""
                      }
                      className={classes.brandimage}
                    />
                  </Link>
                  <Typography className={classes.brandtxt}>
                    {item.product_name}
                  </Typography>
                </Box>
              ))}
          </Box>
        </>
      )}
    </div>
  );
};

export default ResaturantsPage;
