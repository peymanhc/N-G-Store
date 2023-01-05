import {
  Box,
  Button,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import logo from "images/Logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { doRegister, userLogin } from "store/auth/auth.action";
const useStyles = makeStyles((theme) => ({
  logo: {
    width: 200,
    margin: "auto",
  },
  input: {
    border: "2px solid #ffd426",
    width: "100%",
    padding: "5px 10px",
    borderRadius: 5,
    marginTop: 10,
  },
  forgotpass: {
    color: "#0715b5",
    fontSize: 11,
    margin: "20px 0",
    cursor: "pointer",
  },
  next: {
    fontSize: 13,
    backgroundColor: "#ffd426",
    width: "100%",
    padding: "10px 15px",
    marginTop: 20,
    color: "black",
    "&:hover": {
      backgroundColor: "#ffd426",
    },
  },
  anotherway: {
    fontSize: 17,
    fontWeight: 700,
    cursor: "pointer",
    color: "#bd820b",
  },
  redirect: {
    fontSize: 17,
    cursor: "pointer",
    color: "red",
    fontWeight: 700,
  },
}));
const AuthMobile = () => {
  const classes = useStyles();
  const [waies, setwaies] = useState("login");
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const handleChangeWay = (index) => {
    setwaies(index);
  };
  const { register, handleSubmit, errors } = useForm();

  const onSubmitLogin = (data) => {
    dispatch(userLogin(data));
  };
  const onSubmitRegister = (data) => {
    dispatch(doRegister(data));
  };
  return (
    <Box margin="70px 15px">
      <img className={classes.logo} alt="logo" src={logo} />
      {waies === "login" && (
        <>
          <form noValidate>
            <InputBase
              required
              inputRef={register}
              className={classes.input}
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoFocus
            />
            <InputBase
              required
              inputRef={register}
              className={classes.input}
              fullWidth
              type="password"
              id="password"
              placeholder="Password"
              name="password"
            />
            <Typography
              onClick={() => handleChangeWay("forgotpassword")}
              className={classes.forgotpass}
            >
              I forgot my password
            </Typography>
            <Button
              onClick={handleSubmit(onSubmitLogin)}
              className={classes.next}
            >
              Login
            </Button>
          </form>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            margin="15px 0"
          >
            <Typography
              onClick={() => handleChangeWay("register")}
              className={classes.anotherway}
            >
              Signin
            </Typography>
            <Link
              to={`/${
                locale.current.locale === undefined
                  ? "en"
                  : locale.current.locale
              }/${cities.current.title}/shop`}
              className={classes.redirect}
            >
              Redirect Home
            </Link>
          </Box>
        </>
      )}
      {waies === "register" && (
        <form noValidate>
          <InputBase type="text" placeholder="Name" className={classes.input} />
          <InputBase
            required
            inputRef={register}
            className={classes.input}
            fullWidth
            id="email"
            placeholder="Email or Phone"
            name="email"
            autoFocus
          />
          <InputBase
            required
            inputRef={register}
            className={classes.input}
            fullWidth
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          />
          <InputBase
            required
            inputRef={register}
            className={classes.input}
            fullWidth
            type="password"
            id="password"
            placeholder="Confrim Password"
            name="Confrim Password"
          />
          <Button
            onClick={handleSubmit(onSubmitRegister)}
            className={classes.next}
          >
            register
          </Button>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            margin="15px 0"
          >
            <Typography
              onClick={() => handleChangeWay("login")}
              className={classes.anotherway}
            >
              Login
            </Typography>
            <Link
              to={`/${
                locale.current.locale === undefined
                  ? "en"
                  : locale.current.locale
              }/${cities.current.title}/shop`}
              className={classes.redirect}
            >
              Redirect Home
            </Link>
          </Box>
        </form>
      )}
      {waies === "forgotpassword" && (
        <>
          <InputBase
            type="text"
            placeholder="Email or Phone"
            className={classes.input}
          />
          <Button className={classes.next}>send Link</Button>
          <Typography
            onClick={() => handleChangeWay("login")}
            className={classes.forgotpass}
          >
            Login
          </Typography>
        </>
      )}
    </Box>
  );
};

export default AuthMobile;
