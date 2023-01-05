import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import BestShopping from "components/bestshopping/BestShopping";
import Brands from "components/brands/Brands";
import CheckBoxFilter from "components/checkboxFilter/CheckboxFilter";
import PriceRange from "components/PriceRange/PriceRange";
import RelatedCategory from "components/RelatedCategory/RelatedCategory";
import ReorderIcon from "@material-ui/icons/Reorder";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import CardView1 from "../../components/AllProducts/CardView1";
import SimplePagination from "components/SimplePagination/SimplePagination";
import CardView2 from "../../components/AllProducts/CardView2";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { getProducts } from "store/products/products.action";
import { useRouteMatch } from "react-router-dom";
import { Colection, getBestProducts } from "store/layout/layout.action";
import { getBrands } from "store/brands/brands.action";
import { getProperty } from "store/Property/Property.action";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 5px",
  },
  bestShoppingbox: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.01)",
    padding: "10px",
    boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1)",
  },
  categorytitle: {
    fontSize: 12,
    fontWeight: 700,
    margin: "0 5px",
    padding: "0 10px",
    cursor: "pointer",
    color: "rgba(0,0,0,0.6)",
  },
}));
const AllProducts = () => {
  const classes = useStyles();
  const [view, setView] = useState(true);
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch({
    path: "/:language/:city/Products/:property/:page",
  });
  const products = useSelector((state) => state.products);
  const locale = useSelector((state) => state.locale);
  const city = useSelector((state) => state.city);
  const brand = useSelector((state) => state.Brands);
  const property = useSelector((state) => state.property);
  const layout = useSelector((state) => state.Layout);
  const category = useSelector((state) => state.category);
  const [Pagenumber, setPagenumber] = React.useState(1);
  const [getprice, setgetprice] = useState();
  const [Filter, setFilter] = useState([]);
  const [BrandsFilter, setBrandsFilter] = useState("");
  const [CategoryFilter, setCategoryFilter] = useState("");
  const pageCount = useMemo(() => {
    return Math.ceil(products?.data?.count / 16);
  }, [products?.data?.count, 16]);
  let numb = match.params.page.match(/\d/g);
  numb = numb.join("");
  useEffect(
    (e) => {
      setTimeout(() => {
        window.scroll(0, 0);
      }, 1000);
      dispatch(getProperty(match.params.city, match.params.language));
      setCategoryFilter(match.params.property);
      setPagenumber(parseInt(numb));
      delayedCallback({
        limit: 16,
        skip: numb - 1,
        Price: railprice,
        property: Filter,
        category: match.params.property === "All" ? "" : match.params.property,
        brands: BrandsFilter,
      });
      dispatch(
        getBestProducts(
          match.params.language,
          match.params.city,
          "the_best_shopping_opportunity"
        )
      );
      dispatch(Colection(match.params.language, match.params.city));
      dispatch(getBrands(match.params.language, match.params.city));
    },
    [
      match.params.city,
      match.params.language,
      match.params.property,
      match.params.page,
    ]
  );
  const delayedCallback = debounce((value) => {
    dispatch(getProducts(locale.current.locale, city.current.title, value));
  }, 200);
  useEffect(() => {
    setgetprice(layout?.colection?.data?.priceRange[1]);
  }, [layout?.colection?.data?.priceRange[1]]);
  const handleChange = (event, value) => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      window.scroll(0, 0);
    }, 1000);
    setPagenumber(() => {
      const newstate = value;
      delayedCallback({
        limit: 16,
        skip: newstate - 1,
        Price: railprice,
        property: Filter,
        category: CategoryFilter === "All" ? "" : CategoryFilter,
        brands: BrandsFilter,
      });
      window.history.pushState(
        match,
        "Title",
        `/${locale.current.locale}/${city.current.title}/Products/${CategoryFilter}/page=${newstate}/`
      );
      return newstate;
    });
  };
  const handleChangePrice = (event, newValue) => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      window.scroll(0, 0);
    }, 1000);
    setrailprice(newValue);
    delayedCallback({
      limit: 16,
      skip: Pagenumber,
      Price: railprice,
      property: Filter,
      category: CategoryFilter === "All" ? "" : CategoryFilter,
      brands: BrandsFilter,
    });
  };
  const handleChangeCheckBox = (event, index) => {
    if (event.target.checked === true) {
      setFilter(() => {
        const newstate = [...Filter, event.target.name];
        delayedCallback({
          limit: 16,
          skip: Pagenumber - 1,
          Price: railprice,
          property: newstate,
          category: CategoryFilter === "All" ? "" : CategoryFilter,
          brands: BrandsFilter,
        });
        setPagenumber(1);
        return newstate;
      });
    } else {
      setFilter(() => {
        const newstate = Filter.filter(function (item) {
          return item !== event.target.name;
        });
        delayedCallback({
          limit: 16,
          skip: Pagenumber - 1,
          Price: railprice,
          property: newstate,
          category: CategoryFilter === "All" ? "" : CategoryFilter,
          brands: BrandsFilter,
        });
        Filter.filter((item) => item !== newstate);
        setPagenumber(1);
        return newstate;
      });
    }
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      window.scroll(0, 0);
    }, 1000);
  };
  const handleChangeCategory = (event, index) => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      window.scroll(0, 0);
    }, 1000);
    setCategoryFilter(event);
    setPagenumber(() => {
      const newstate = index;
      if (event === "All") {
        delayedCallback({
          limit: 16,
          skip: newstate - 1,
          Price: railprice,
          property: Filter,
          category: "",
          brands: BrandsFilter,
        });
      } else {
        delayedCallback({
          limit: 16,
          skip: newstate - 1,
          Price: railprice,
          property: Filter,
          category: event,
          brands: BrandsFilter,
        });
      }
      window.history.pushState(
        match,
        "Title",
        `/${locale.current.locale}/${city.current.title}/Products/${event}/page=${newstate}/`
      );
      return newstate;
    });
  };
  const handleChangeBrand = (event, index) => {
    setBrandsFilter(() => {
      const newstate = [...BrandsFilter, event];
      delayedCallback({
        limit: 16,
        skip: Pagenumber - 1,
        Price: railprice,
        property: Filter,
        category: CategoryFilter === "All" ? "" : CategoryFilter,
        brands: newstate,
      });
      setPagenumber(1);
      return newstate;
    });
  };
  const [railprice, setrailprice] = useState([
    0,
    getprice !== undefined ? getprice : 1250000,
  ]);
  return (
    <Box margin="20px 0 100px 0">
      {layout?.loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
        >
          <CircularProgress
            style={{ width: "100px", height: "100px", color: "#fc0" }}
          />
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={3}>
            <Box className={classes.root}>
              <Box className={classes.bestShoppingbox}>
                <RelatedCategory
                  CategoryFilter={CategoryFilter}
                  setCategoryFilter={setCategoryFilter}
                  handleChangeFilter={(e, index) =>
                    handleChangeCategory(e, index)
                  }
                  data={category.data}
                />
                {property?.data?.data?.map((item, i) => (
                  <CheckBoxFilter
                    title={item.title}
                    properties={item.properties}
                    setFilter={(e) => setFilter(e)}
                    handleChange={(e, index) => handleChangeCheckBox(e, index)}
                    Filter={Filter}
                  />
                ))}
                <PriceRange
                  handleChange={handleChangePrice}
                  railprice={railprice}
                  max={getprice}
                />
                <Brands
                  handleChangeBrand={(e, index) => handleChangeBrand(e, index)}
                  images={brand?.brands?.data}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <BestShopping data={layout?.bestProducts} />
            <Box display="flex" justifyContent="end">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="15px 10px"
                padding="10px !important"
                width="15% !important"
                marginLeft={0}
                className={classes.bestShoppingbox}
              >
                <Typography style={{ fontSize: "12px", fontWeight: 700 }}>
                  View:
                </Typography>
                <ReorderIcon
                  onClick={() => setView(false)}
                  style={{ cursor: "pointer", color: view ? "black" : "red" }}
                />
                <ViewModuleIcon
                  onClick={() => setView(true)}
                  style={{ cursor: "pointer", color: view ? "red" : "black" }}
                />
              </Box>
            </Box>
            <Box padding="0 10px !important">
              {Loading ? <LinearProgress color="secondary" /> : null}
              <Box className={classes.bestShoppingbox}>
                {Loading ? (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="100%"
                    height="590px"
                  >
                    <CircularProgress style={{ color: "red" }} />
                  </Box>
                ) : (
                  <>
                    {products.data.count === 0 && (
                      <Typography
                        style={{ margin: "30px auto", textAlign: "center" }}
                      >
                        Data Not Found
                      </Typography>
                    )}
                    {view ? (
                      <Grid container>
                        {products?.data?.products?.map((item, i) => (
                          <Grid item xs={3}>
                            <CardView1
                              key={i}
                              id={item.id}
                              slug={
                                match.params.language === "en"
                                  ? item.translate.en
                                  : match.params.language === "ar"
                                  ? item.translate.ar
                                  : match.params.language === "fr"
                                  ? item.translate.fr
                                  : "not-valid"
                              }
                              image={
                                item.images[0]?.url ? item.images[0]?.url : ""
                              }
                              price={item.priceTaxIncl}
                              ratednumber={item.like}
                              rate={item.taxRate}
                              title={item.name}
                              recommend={item.discount}
                            />
                          </Grid>
                        ))}
                      </Grid>
                    ) : (
                      <>
                        {products?.data?.products?.map((item, i) => (
                          <>
                            <CardView2
                              key={i}
                              id={item.id}
                              slug={
                                match.params.language === "en"
                                  ? item.translate.en
                                  : match.params.language === "ar"
                                  ? item.translate.ar
                                  : match.params.language === "fr"
                                  ? item.translate.fr
                                  : "not-valid"
                              }
                              image={
                                item.images[0]?.url ? item.images[0]?.url : ""
                              }
                              price={item.priceTaxIncl}
                              ratednumber={item.like}
                              rate={item.taxRate}
                              title={item.name}
                              recommend={item.discount}
                              info={item.info}
                            />
                            <Divider />
                          </>
                        ))}
                      </>
                    )}
                  </>
                )}
                <Box padding="10px !important">
                  <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className={classes.bestShoppingbox}
                  >
                    <SimplePagination
                      count={pageCount}
                      page={Pagenumber}
                      handleChange={handleChange}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default AllProducts;
