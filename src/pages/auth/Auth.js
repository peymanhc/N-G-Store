import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import loginbg from "images/Loginbg.jpg";
import Logo from "images/Logo.png";
import { AppBar, InputBase, Toolbar } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { doRegister, userLogin } from "store/auth/auth.action";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
function Redirect({ text }) {
  return (
    <Typography
      className="font-bold"
      variant="body2"
      color="textSecondary"
      align="center"
    >
      <Link color="inherit" to="/">
        {text}
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${loginbg})`,
    width: "100%",
  },
  wrapper: {
    zIndex: 999,
    position: "fixed",
    right: 100,
    top: 200,
    width: "40%",
    [theme.breakpoints.down(1100)]: {
      width: "70%",
      maxWidth: "70%",
      margin: "auto",
      left: 0,
      right: 0,
    },
  },
  paper: {
    margin: "auto",
    display: "flex",
    padding: "30px",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
    maxWidth: 390,
    width: "100%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ff7675",
    color: "white",
    padding: "15px 0",
    "&:hover": {
      backgroundColor: "#ff7675",
    },
  },
  input: {
    marginTop: 5,
    border: "2px solid rgba(0,0,0,0.1)",
    padding: "4px 10px",
    borderRadius: 7,
  },
  appbar: {
    position: "absolute",
    width: "100%",
    backgroundColor: "transparent",
    maxWidth: 1700,
    margin: "auto",
    left: 0,
    right: 0,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    margin: "10px 0",
  },
  subtitle: {
    fontSize: 17,
    color: "rgba(0,0,0,0.7)",
    fontWeight: 100,
  },
  errmsg: {
    marginTop: 10,
    color: "red",
    fontWeight: 700,
  },
  defaultTextLogin: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: 700,
    textAlign: "center",
  },
  formTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    "&:first-letter": {
      color: "#ff0000",
    },
  },
}));

function Auth({ intl }) {
  const classes = useStyles();
  const [form, setform] = useState(0);
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const [ConfrimPass, setConfrimPass] = useState(null);
  const [password, setpassword] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmitLogin = (data) => {
    setpassword(data.password);
    dispatch(userLogin(data));
  };
  const onSubmitRegister = (data) => {
    ConfrimPass === data.password && dispatch(doRegister(data));
  };
  return (
    <Grid className={classes.root} container component="main">
      <Box component={Paper} className={classes.paper}>
        <Box width="100%">
          <Box
            margin="auto"
            marginBottom="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <img width="120px" alt={"Logo"} src={Logo} />
            <Typography className={classes.defaultTextLogin}>
              Log in to save your products and settings on all devices from
              which you enter the Market.
            </Typography>
          </Box>
          <Typography variant="h5" className={classes.formTitle}>
            {form === 0 ? (
              <FormattedMessage id="sign.in" defaultMessage="Sign in" />
            ) : form === 1 ? (
              <FormattedMessage id="sign.up" defaultMessage="Sign up" />
            ) : (
              <FormattedMessage
                id="Forgot.password"
                defaultMessage="Forgot password"
              />
            )}
          </Typography>
        </Box>
        {form === 0 ? (
          <form
            onSubmit={handleSubmit(onSubmitLogin)}
            className={classes.form}
            noValidate
          >
            <Box display="none">
              <InputLabel
                style={{ fontSize: "12px" }}
                className="text-black font-bold text-xs mt-4 mx-2"
              >
                <FormattedMessage
                  id="Your.Full.Name"
                  defaultMessage="Your Full Name"
                />
                <span style={{ color: "red" }}>*</span>
              </InputLabel>
              <InputBase
                required
                fullWidth
                name="name"
                inputRef={register}
                id="name"
                placeholder={intl.formatMessage({
                  id: "Your.Full.Name",
                  defaultMessage: "what is your name",
                })}
              />
            </Box>
            <InputLabel
              style={{ fontSize: "12px" }}
              className="text-black font-bold text-xs mt-4 mx-2"
            >
              <FormattedMessage id="Your.Email" defaultMessage="Your Email" />{" "}
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <InputBase
              required
              inputRef={register}
              className={classes.input}
              fullWidth
              id="email"
              placeholder={intl.formatMessage({
                id: "Your.Email",
                defaultMessage: "Your Email",
              })}
              name="email"
              autoFocus
            />
            <InputLabel
              style={{ fontSize: "12px" }}
              className="text-black font-bold text-xs mt-4 mx-2"
            >
              <FormattedMessage
                id="Your.Password"
                defaultMessage="Your Password"
              />{" "}
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <InputBase
              required
              inputRef={register}
              className={classes.input}
              fullWidth
              type="password"
              id="password"
              placeholder={intl.formatMessage({
                id: "Your.Password",
                defaultMessage: "Your Password",
              })}
              name="password"
            />
            <Button type="submit" fullWidth className={classes.submit}>
              <FormattedMessage id="continue" defaultMessage="continue" />
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={() => setform(3)} href="#" variant="body2">
                  <FormattedMessage
                    id="Forgot.password"
                    defaultMessage="Forgot password"
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link
                  onClick={() => setform(1)}
                  href="#Sign Up"
                  variant="body2"
                >
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Redirect />
            </Box>
          </form>
        ) : form === 1 ? (
          <form
            onSubmit={handleSubmit(onSubmitRegister)}
            className={classes.form}
            noValidate
          >
            <InputLabel
              style={{ fontSize: "12px" }}
              className="text-black font-bold text-xs mt-4 mx-2"
            >
              <FormattedMessage id="Your.Email" defaultMessage="Your Email" />
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <InputBase
              required
              className={classes.input}
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              placeholder={intl.formatMessage({
                id: "Your.Email",
                defaultMessage: "Your Email",
              })}
              inputRef={register}
            />
            <InputLabel
              style={{ fontSize: "12px" }}
              className="text-black font-bold text-xs mt-4 mx-2"
            >
              <FormattedMessage
                id="Your.Full.Name"
                defaultMessage="Your Full Name"
              />
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <InputBase
              required
              className={classes.input}
              fullWidth
              name="name"
              inputRef={register}
              id="name"
              placeholder={intl.formatMessage({
                id: "Your.Full.Name",
                defaultMessage: "what is your name",
              })}
            />
            <InputLabel
              style={{ fontSize: "12px" }}
              className="text-black font-bold text-xs mt-4 mx-2"
            >
              <FormattedMessage
                id="profile.messageDialog.Password"
                defaultMessage="password"
              />{" "}
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <InputBase
              required
              className={classes.input}
              fullWidth
              type="password"
              id="password"
              placeholder={intl.formatMessage({
                id: "profile.messageDialog.Password",
                defaultMessage: "password",
              })}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              name="password"
              inputRef={register}
            />
            <InputLabel
              style={{ fontSize: "12px" }}
              className="text-black font-bold text-xs mt-4 mx-2"
            >
              <FormattedMessage
                id="Confirm.Password"
                defaultMessage="Confirm Password"
              />
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <InputBase
              required
              className={classes.input}
              fullWidth
              type="password"
              placeholder={intl.formatMessage({
                id: "Confirm.Password",
                defaultMessage: "Confirm Password",
              })}
              value={ConfrimPass}
              onChange={(e) => setConfrimPass(e.target.value)}
              id="ConfrimPassword"
              inputRef={register}
            />
            {password !== ConfrimPass ? (
              <p className={classes.errmsg}>password not match</p>
            ) : null}
            <Button type="submit" fullWidth className={classes.submit}>
              <FormattedMessage id="Sign.up" defaultMessage="Sign up" />
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  onClick={() => setform(0)}
                  href="#Sign in"
                  variant="body2"
                >
                  <FormattedMessage
                    id="You.Have.an.Account.Sign.in"
                    defaultMessage="You Have an Account ? Sign in"
                  />
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Redirect
                text={
                  <FormattedMessage
                    id="Redirect.to.Home"
                    defaultMessage="Redirect to Home"
                  />
                }
              />
            </Box>
          </form>
        ) : (
          <form className={classes.form} noValidate>
            <InputLabel
              style={{ fontSize: "12px" }}
              className="text-black font-bold text-xs mt-4 mx-2"
            >
              <FormattedMessage id="Your.Email" defaultMessage="Your Email" />
              <span style={{ color: "red" }}>*</span>
            </InputLabel>
            <InputBase
              required
              className={classes.input}
              fullWidth
              id="email"
              placeholder={intl.formatMessage({
                id: "Your.Email",
                defaultMessage: "Your Email",
              })}
              name="email"
              autoComplete="email"
            />
            <Button type="submit" fullWidth className={classes.submit}>
              Send Rest Link
            </Button>
            <Grid item>
              <Link onClick={() => setform(0)} href="#Sign in" variant="body2">
                <FormattedMessage id="sign.in" defaultMessage="Sign in" />
              </Link>
            </Grid>
            <Box mt={5}>
              <Redirect
                text={
                  <FormattedMessage
                    id="Redirect.to.Home"
                    defaultMessage="Redirect to Home"
                  />
                }
              />
            </Box>
          </form>
        )}
      </Box>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className="flex justify-between" variant="dense">
          <Link
            to={`/${
              locale.current.locale === undefined ? "en" : locale.current.locale
            }/${cities.current.title}/shop`}
            variant="h6"
            className={classes.title}
          >
            N & D WSOUK
          </Link>
          <Box
            width="300px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle1" color="inherit">
              +989030525589
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              Contactus
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <CssBaseline />
    </Grid>
  );
}
export default injectIntl(Auth);
