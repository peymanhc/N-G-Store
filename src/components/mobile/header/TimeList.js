import React, { useEffect, forwardRef } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedMenuItem } from "store/menu";
import { getTimeList } from "store/time";

const today = (
  <FormattedMessage id="home.timeList.Today" defaultMessage="Today" />
);
const tomorrow = (
  <FormattedMessage id="home.timeList.Tomorrow" defaultMessage="Tomorrow" />
);
const now = <FormattedMessage id="home.catalog.Now" defaultMessage="Now" />;

const TimeList = forwardRef(
  ({ selectedMenuItem, selectedItem, time, getTimeList, when }, ref) => {
    useEffect(() => {
      getTimeList();
    }, [getTimeList]);

    return (
      <div ref={ref}>
        <MenuItem
          selected={now === selectedItem && when === now}
          onClick={() => selectedMenuItem(now, now)}
        >
          <div className="text-center w-full my-1 text-sm">{now}</div>
        </MenuItem>
        {time.todayTimes.map((option) => (
          <MenuItem
            key={option}
            selected={option === selectedItem && when === today}
            onClick={() => selectedMenuItem(option, today)}
          >
            <div className="text-center w-full my-1 text-sm">
              {option} {today}
            </div>
          </MenuItem>
        ))}
        {time.tomorrowTimes.map((option) => (
          <MenuItem
            key={option}
            selected={option === selectedItem && when === tomorrow}
            onClick={() => selectedMenuItem(option, tomorrow)}
          >
            <div className="text-center w-full my-1 text-sm">
              {option} {tomorrow}
            </div>
          </MenuItem>
        ))}
      </div>
    );
  }
);

function mapStateToProps(state) {
  return {
    time: state.timeList.time,
    selectedItem: state.menu.selectedItem,
    when: state.menu.when,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectedMenuItem,
      getTimeList,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(TimeList);