import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Categories from "components/categories/Categories";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBetterForU } from "store/betterforu/betterforu.action";
import { useRouteMatch } from "react-router-dom";
import { getProducts } from "store/products/products.action";
import CartTable from "components/mobile/cartTable/CartTable";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "100px 0",
  },
  title: {
    margin: "30px 0",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "center",
  },
}));
const Search = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const match = useRouteMatch({ path: "/:language/:city" });
  const category = useSelector((state) => state.category);
  const Searchdata = useSelector((state) => state.Searchdata);
  useEffect(() => {
    dispatch(
      getBetterForU(match.params.city, match.params.language, "better_for_you")
    );
    dispatch(
      getProducts(match.params.city, match.params.language, "better_for_you")
    );
    window.scroll(0, 0);
    // eslint-disable-next-line
  }, []);
  return (
    <Box className={classes.root}>
      <Grid container>
        {category?.data?.map((item) => (
          <Grid item xs={6}>
            <Categories image={`${item.imageSrc}`} title={item.title} />
          </Grid>
        ))}
      </Grid>
      <Box style={{ margin: "auto" }}>
        {Searchdata?.data?.products?.map((item, i) => (
          <CartTable
            id={item?.id}
            slug={
              match.params.language === "en"
                ? item.translate.en
                : match.params.language === "ar"
                ? item.translate.ar
                : match.params.language === "fr"
                ? item.translate.fr
                : "not-valid"
            }
            image={item.images[0]?.url ? item.images[0]?.url : ""}
            title={item.name}
            price={item?.priceTaxIncl}
            search={true}
          />
        ))}
      </Box>
    </Box>
  );
};
export default Search;
