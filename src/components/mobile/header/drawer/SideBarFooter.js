import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  footer: {
    width: "312px",
    position: "sticky",
    left: 0,
    bottom: 0,
    boxShadow:
      "6px 4px 6px 6px rgba(0, 0, 0, 0.1), 0 2px 4px 6px rgba(0, 0, 0, 0.06)",
  },
  feedbackIcon: {
    flex: " 0 0 auto",
    boxShadow:
      " 0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
    lineHeight: 0,
    marginRight: "15px",
    borderRadius: "50%",
    backgroundColor: "rgb(255, 224, 51)",
  },
}));

const feedbackIcon = {
  src: "/static/images/header/feedback.svg",
  alt: "feedback",
};
const SideBarFooter = () => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.footer, "text-center p-6 bg-white")}>
      <div className="m-auto flex items-center text-md justify-center cursor-pointer">
        <div className={classes.feedbackIcon}>
          <div>
            <img
              src={feedbackIcon.src}
              alt={feedbackIcon.alt}
              className="m-3"
            />
          </div>
        </div>
        <div>
          <FormattedMessage
            id="home.SideBarFooter.ContactUS"
            defaultMessage="Contact US"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBarFooter;
