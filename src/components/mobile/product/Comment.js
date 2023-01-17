import {
  Box,
  Button,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import SimpleModal from "components/modal/SimpleModal";
import React, { useState } from "react";
import CommentDetail from "./CommentDetail";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 16,
    fontWeight: 700,
    color: "black",
    textTransform: "capitalize",
  },

  ratedvalue: {
    fontSize: 18,
    fontWeight: 900,
    margin: "0 10px",
  },
  Peoplereated: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
  addcm: {
    margin: "20px 0",
    width: 150,
    fontSize: 12,
    padding: "10px 15px",
    background: "white",
    border: "3px solid #c9c9c9",
    textTransform: "lowwercase",
  },
  modalbody: {
    bottom: "0",
    position: "absolute",
    margin: "auto",
    borderRadius: 4,
    backgroundColor: "white",
    overFlow: "hidden",
    width: "100%",
    minHeight: "40%",
    padding: "10px 0",
  },
  modal: {
    position: "relative",
  },
  closemodal: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  backicon: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  ratename: {
    fontSize: 18,
    fontWeight: 700,
    margin: "10px 0",
  },
  commentlevel: {
    fontSize: 10,
    color: "gray",
  },
  sendComment: {
    backgroundColor: "#ffb400",
    width: "100%",
    padding: "10px 15px",
    marginTop: 10,
    "&:hover": {
      backgroundColor: "#ffb400",
    },
  },
}));
const Comment = () => {
  const [open, setOpen] = useState(false);
  const [level, setlevel] = useState(1);
  const [designing, setDesigning] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSetDesigning = (newval) => {
    setDesigning(newval);
    setTimeout(() => {
      setlevel(level + 1);
    }, 1000);
  };
  const classes = useStyles();
  return (
    <Box margin="20px 0">
      <Typography style={{ marginTop: "30px 0" }} className={classes.title}>
        average score
      </Typography>
      <Box className={classes.rating} display="flex" alignItems="center">
        <Rating readOnly value={4.3} precision={0.1} />
        <Typography className={classes.ratedvalue}>4.3</Typography>
        <Typography className={classes.Peoplereated}>
          259 People reated
        </Typography>
      </Box>
      <Button onClick={handleOpen} className={classes.addcm}>
        Add Comment
      </Button>
      <SimpleModal
        className={`${classes.modalbody}`}
        handleClose={handleClose}
        open={open}
        body={
          <Box className={classes.modal}>
            <IconButton onClick={handleClose} className={classes.closemodal}>
              <CloseIcon />
            </IconButton>
            {level === 1 && (
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                <Box marginTop={8} textAlign="center">
                  <span className={classes.commentlevel}>{level} / 2</span>
                  <Typography className={classes.ratename}>
                    Construction quality
                  </Typography>
                  <Rating
                    value={designing}
                    onChange={(event, newValue) => {
                      handleSetDesigning(newValue);
                    }}
                    precision={0.5}
                  />
                </Box>
              </Box>
            )}
            {level === 2 && (
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
              >
                <IconButton
                  onClick={() => setlevel(2)}
                  className={classes.backicon}
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
                <Box
                  width="100%"
                  padding="10px"
                  marginTop={3}
                  textAlign="center"
                >
                  <span className={classes.commentlevel}>{level} / 2</span>
                  <Typography className={classes.ratename}>Comment</Typography>
                  <TextField
                    style={{ width: "100%" }}
                    multiline
                    rows={4}
                    id="Comment"
                    label="Comment"
                    variant="outlined"
                  />
                  <Button className={classes.sendComment}>Send Comment</Button>
                </Box>
              </Box>
            )}
          </Box>
        }
      />
      <CommentDetail />
    </Box>
  );
};

export default Comment;
