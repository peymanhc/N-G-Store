import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import ScrollSpy from "assert/ScrollSpy";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";
import { closeDialog } from "store/dialog";
import { Link } from "react-router-dom";

import MobileProductMenu from "../../product/mobile-product-modal/MobileProductMenu";

const useStyles = makeStyles((theme) => ({
  paper: { marginTop: "100px", borderRadius: " 12px 12px 0 0" },
  cartBar: {
    left: "0",
    width: "100%",
    bottom: "0",
    position: "fixed",
  },
  cartBarContent: {
    width: "100%",
    height: "100%",
    padding: "8px",
    overflow: "hidden",
    boxShadow: "0 -4px 8px 0 rgba(0, 0, 0, 0.05)",
    backgroundColor: "#ffffff",
  },
  cartBarBtn: {
    width: "100%",
    display: "block",
    padding: "0 11px",
    backgroundColor: "rgb(255, 224, 51)",
    color: "#000",
    height: "52px",
    border: "0",
    position: "relative",
    overflow: "hidden",
    fontSize: "16px",
    transition: "background 200ms",
    fontWeight: "400",
    userSelect: "none",
    borderRadius: "8px",
  },
  submitBtn: {
    padding: "12px",
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
    boxShadow:
      "0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
  },
  btnContent: {
    flex: "0 0 auto",
    padding: "7px 10px",
    fontSize: "14px",
    borderRadius: "3px",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
}));

const MobileRestaurantCategoryProductList = ({
  className,
  categorise,
  elWrapper,
  openDialog,
  closeDialog,
}) => {
  const classes = useStyles();
  const [showCartBtn, setShowCartBtn] = useState(false);

  const menuBtnHandler = () => {
    closeDialog();
    setShowCartBtn(true);
  };

 
	useEffect(() => { 
	
		const activeChange = (activeItem) => {
			const category = document.querySelector(
				".category .categoryCarouselScroll"
			);
			category.scrollLeft = activeItem.offsetLeft;
		};
		
		const scrollWrapper = document.getElementById("ScrollWrapper");
		const options = {
			sectionClass: ".categoryProductList > section",
			offset: 116,
		};	
		
		let onScroll;
		const timeId = setTimeout(() => { 
			const instance = new ScrollSpy(
				scrollWrapper,
				".category .categoryList",
				options,
				activeChange
			);
			const onScroll = () => instance.onScroll();
			onScroll();		
			scrollWrapper.addEventListener("scroll", onScroll);	
		});	
		
		return () => {
			if(onScroll)
				scrollWrapper.removeEventListener('scroll', onScroll);
			clearTimeout(timeId);
		};
		
  }, []);  
  

  return (
    <div className={className}>
      {categorise.map(({ id, name, products }, index) => (
        <section className="categoryProductItem" key={index} id={id}>
          <div className="productCategoryHeader">
            <div className="productCategoryName">{name}</div>
          </div>
          <div className="productList">
            {products.map(
              (
                { name, imagesAdress, price, discount, weight },
                productIndex
              ) => (
                <div
                  className="productListItem cursor-pointer"
                  key={productIndex}
                  onClick={() =>
                    openDialog({
                      children: (
                        <MobileProductMenu
                          name={name}
                          imagesAdress={imagesAdress}
                          price={price}
                          menuBtnHandler={menuBtnHandler}
                        />
                      ),

                      fullWidth: true,
                      fullScreen: true,
                      scroll: "paper",
                      classes: { paper: classes.paper },
                    })
                  }
                >
                  <div className="productImageLoaded productItemCoverRoot productItemImageRoot">
                    <div
                      className="productItemCoverImage image"
                      style={{ backgroundImage: `url(${imagesAdress})` }}
                    />
                    <noscript>
                      <img src={imagesAdress} alt={name} />
                    </noscript>
                  </div>
                  <div className="p-3">
                    <div className="productItemName">{name}</div>
                    <div className="promoList promoListOnCover">
                      <div className="promoListItem">
                        <img
                          className="promoImage"
                          alt="discount"
                          src="/static/images/icons/percent.png"
                        />
                      </div>
                    </div>
                    <div className="productItemBottom">
                      <div className="productItemBottomLeft">
                        <span className="productItemPrice productItemPromoPrice">
                          {price} P
                        </span>
                        <span className="productItemOrigPromoPrice">
                          <del>{discount}</del> P
                        </span>
                      </div>
                      <div className="productItemBottomRight">
                        <span className="productItemStatusText">{weight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      ))}
      {showCartBtn && (
        <div className={classes.cartBar}>
          <div className={classes.cartBarContent}>
            <button
              className={classNames(
                classes.submitBtn,
                "text-center w-full text-lg"
              )}
            >
              <Link to="/cart">
                <span className="w-full h-full relative flex flex-no-wrap items-center">
                  <div className={classes.btnContent}>50 ₽</div>
                  <div className="flex mx-auto items-center justify-center">
                    <FormattedMessage
                      id="Checkout.ContinueCheckout"
                      defaultMessage="Proceed to checkout"
                    />
                  </div>
                  <div className={classes.btnContent}>50 ₽</div>
                </span>
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categorise: state.restaurant.restaurantProductCategorise,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
      closeDialog,
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileRestaurantCategoryProductList);
