import * as Actions from "./time.actions";

const initialState = {
  time:{
    todayTimes:[],
    tomorrowTimes:[]
  },
};

const time = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_TIMELIST: {
      return {
        ...state,
        time: action.payload,
      };
    }
    case Actions.TIME_CHANGE:{
        return {
            ...state,
            
        }
    }
    default: {
      return state;
    }
  }
};
export default time