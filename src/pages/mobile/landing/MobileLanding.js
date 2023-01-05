import {
  Box,
  Button,
  CircularProgress,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CardPost from "components/cardPost/CardPost";
import React, { useEffect } from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import RootSlider from "components/mobile/rootslider/RootSlider";
import PostSlider from "components/mobile/postSlider/PostSlider";
import BigCard from "components/bigCard/BigCard";
import CardList from "components/mobile/cardList/CardList";
import Categories from "components/categories/Categories";
import { FormattedMessage } from "react-intl";
import RecommentedCard from "components/Recommented_Card/RecommentedCard";
import DiscountCart from "components/discountCart/DiscountCart";
import Count from "components/discountCart/Count";
import SubCategories from "components/SubCategories/SubCategories";
import { getRecommentedData } from "store/layout/layout.action";
import { getBrands } from "store/brands/brands.action";
const useStyles = makeStyles((theme) => ({
  texttitle: {
    marginBottom: 20,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 700,
    color: "black",
    textAlign: "center",
  },
  root: {
    marginTop: 50,
    marginBottom: 100,
  },
  cardlists: {
    width: "100%",
    marginBottom: 50,
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  brand: {
    border: "1px solid rgba(0,0,0,0.2)",
    height: 100,
    padding: "20px 10px",
    margin: "0 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  brandimage: {
    height: 95,
  },
  imgslider: {
    width: "100%",
    height: 200,
    padding: 1,
    objectFit: "cover",
  },
  subtitle: {
    textAlign: "center",
    position: "relative",
    top: "-40px",
    letterSpacing: 2,
    fontSize: 10,
    color: "white",
    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
  },
  discountBox: {
    backgroundColor: "#d83756",
    color: "white",
    width: "100%",
    padding: "20px",
    position: "relative",
    margin: "30px 0",
  },
  discounttitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "white",
  },
  seeallbtn: {
    color: "black",
    backgroundColor: "white",
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    width: "100px",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));
const MobileLanding = () => {
  const classes = useStyles();
  const betterforu = useSelector((state) => state.betterforu);
  const category = useSelector((state) => state.category);
  const Brands = useSelector((state) => state.Brands);
  const layout = useSelector((state) => state.Layout);
  const match = useRouteMatch({ path: "/:language/:city" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getRecommentedData(
        match.params.language,
        match.params.city,
        "recommented_for_you"
      )
    );
    dispatch(getBrands(match.params.language, match.params.city));
  }, []);
  return (
    <div className={classes.root}>
      <RootSlider>
        {Brands?.slider?.data?.map((item, i) => {
          return (
            <div className="cursor-pointer p-2" key={i}>
              <img
                alt="slide"
                className={classes.imgslider}
                src={`https://nandwsouk.com/${item.imageSrc}`}
              />
              <Typography className={classes.subtitle}>{item.title}</Typography>
            </div>
          );
        })}
      </RootSlider>
      <PostSlider itemslidesmall={2} itemslide={3} center={true}>
        {category?.category?.categories?.map((item, i) => (
          <SubCategories key={i} image={item.imageSrc} title={item.title} />
        ))}
      </PostSlider>
      <Box padding="0 15px">
        <Typography className={classes.texttitle}>
          <FormattedMessage
            id="better.for.you"
            defaultMessage="better for you"
          />
        </Typography>
        {betterforu.loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <CircularProgress style={{ color: "red", marginBottom: 50 }} />
          </Box>
        ) : (
          <PostSlider itemslide={1} center={true}>
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
          </PostSlider>
        )}
        <Box className={classes.discountBox}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography className={classes.discounttitle}>
                Exciting discounts + free delivery
              </Typography>
              <Count />
            </Box>
            <Link to={`${match.url}/DaylyOffpage`}>
              <Button className={classes.seeallbtn}>
                See All <ArrowRightAltIcon style={{ margin: "0 5px" }} />
              </Button>
            </Link>
          </Box>
          <PostSlider itemslide={1} center={false}>
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
          </PostSlider>
        </Box>
        <Typography className={classes.texttitle}>Only Today Off</Typography>
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
            layout?.onlyToday?.data[0]?.products[2]?.productDetails?.images[0]
              ?.url
          }
          price={
            layout?.onlyToday?.data !== undefined &&
            layout?.onlyToday?.data[0]?.products[2]?.product_price
          }
          lastprice={
            layout?.onlyToday?.data !== undefined &&
            layout?.onlyToday?.data[0]?.products[2]?.product_after_discount
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
            layout?.onlyToday?.data[0]?.products[2]?.productDetails.translate.en
          }
        />
        <List className={classes.cardlists}>
          {layout?.onlyToday?.data !== undefined &&
            layout?.onlyToday?.data[0]?.products?.map((item, i) => (
              <CardList
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
        </List>
        <Box style={{ backgroundColor: "#fffad0", padding: "20px 10px" }}>
          <Typography className={classes.texttitle} variant="h3">
            <FormattedMessage
              id="Popular.Categories"
              defaultMessage="Popular Categories"
            />
          </Typography>
          <Grid container>
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
                {category?.data?.map((item) => (
                  <Grid item xs={4}>
                    <Categories image={item.imageSrc} title={item.title} />
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Box>
        {layout?.recommented?.data?.length === 0 ? null : (
          <Typography className={classes.texttitle} variant="h3">
            <FormattedMessage
              id="recommented.for.you"
              defaultMessage="recommented for you"
            />
          </Typography>
        )}
        {layout.loading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <CircularProgress style={{ color: "red", marginBottom: 50 }} />
          </Box>
        ) : (
          <PostSlider itemslide={1} center={true}>
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
          </PostSlider>
        )}
        <Typography className={classes.texttitle} variant="h3">
          <FormattedMessage
            id="Popular.brands"
            defaultMessage="Popular brands"
          />
        </Typography>
        <PostSlider itemslide={2} center={true}>
          {Brands?.brands?.data?.map((item, i) => (
            <Box key={i} className={classes.brand}>
              <img
                className={classes.brandimage}
                alt="brand"
                src={`https://nandwsouk.com/${item.imageSrc}`}
              />
            </Box>
          ))}
        </PostSlider>
        {layout?.twocate?.data !== undefined &&
          layout?.twocate?.data[0]?.products?.map((item, i) => (
            <Box key={i} padding="5px" width="100%">
              <img
                alt="discount"
                src={
                  item?.productDetails?.images[0]?.url
                    ? `https://nandwsouk.com/${item?.productDetails?.images[0]?.url}`
                    : ""
                }
              />
            </Box>
          ))}
      </Box>
      <Typography className={classes.texttitle} variant="h3">
        <FormattedMessage id="new.products" defaultMessage="new products" />
      </Typography>
      <PostSlider itemslide={1} center={true}>
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
      </PostSlider>
    </div>
  );
};
export default MobileLanding;
