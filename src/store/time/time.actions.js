import { todayTimes, tomorrowTimes } from "../../data/time";

export const GET_TIMELIST = "[TIME] GET_TIMELIST";
export const TIME_CHANGE = "[TIME] TIME_CHANGE";

export function getTimeList() {
  return {
    type: GET_TIMELIST,
    payload: { todayTimes, tomorrowTimes },
  };
}
export function timeChange(time) {
  return {
    type: TIME_CHANGE,
    payload: time,
  };
}
