import React from "react";
import { withStyles, Breadcrumbs, Link } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: "54",
    },	
	flip:false,
	direction:"ltr",
  },
  breadcrumbs: {
    color: "#b0b0b0",
    fontSize: "12px",
    width: "8rem",
    [theme.breakpoints.up("sm")]: {
      margin: "10px auto",
    },
    margin: "10px 0",
  },
  heroImage: {
	flip:false,  
    padding: "1.5rem 1.2rem",
    paddingBottom: "0px",
    backgroundSize: "auto 200px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundImage:
      "url(/static/images/header/b51928a28b24c9a5605a9542e1c5c46f.jpg)",
    [theme.breakpoints.up("sm")]: {
      backgroundSize: "auto 250px",
    },
  },
  paragraph: {
    color: "#b0b0b0",
    fontSize: "12px",
  },
}));

const Breadcrumb = withStyles({
  root: {
    "& .MuiBreadcrumbs-ol": {
      flexWrap: "nowrap",
    },
  },
})(Breadcrumbs);

const links = [
  {
    name: (
      <FormattedMessage id="home.hero.YandexEda" defaultMessage="Yandex.Food" />
    ),
    address: "/",
    id: "1",
  },
  {
    name: <FormattedMessage id="home.hero.Moscow" defaultMessage="Moscow" />,
    address: "/mosco",
    id: "2",
  },
];
const imageText = [
  <FormattedMessage
    id="home.hero.FirstImage"
    defaultMessage="Fast food delivery"
  />,
  <FormattedMessage
    id="home.hero.SecondImage"
    defaultMessage="in Moscow"
  />,
];

const MobileHero = () => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.heroImage, "sm:text-center p-3 mt-3")}>
      <div className={classes.root}>
        <Breadcrumb
          separator="."
          aria-label="breadcrumb"
          className={classes.breadcrumbs}
        >
          {links.map(({ name, address }, index) => (
            <Link key={index} to={address} color="inherit">
              {name}
            </Link>
          ))}
        </Breadcrumb>
        <h1 className="text-xl w-1/2 sm:mx-auto sm:text-2xl sm:text-center mb-4">
          {imageText.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </h1>
        <p
          className={classNames(
            classes.paragraph,
            "w-3/4 leading-normal mb-4 sm:w-3/5 sm:mx-auto "
          )}
        >
          <FormattedMessage
            id="home.mobileHero.GuidMessage"
            defaultMessage="ُIndicate your location so that we can offer you a list of available restaurants"
          />
        </p>
      </div>
    </div>
  );
};

export default MobileHero;
