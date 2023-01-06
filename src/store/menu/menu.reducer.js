import * as Actions from "./menu.actions";

const iniatialState = {
  state: null,
  options: {
    children: "hi",
  },
  selectedItem:null,
  when:null,
  selectionAction:false
};
const menu = function (state = iniatialState, action) {
  switch (action.type) {
    case Actions.OPEN_MENU: {
      return {
        ...state,
        state: action.currentTarget,
        options: {
          ...state.options,
          ...action.options,
        },
      };
    }
    case Actions.CLOSE_MENU: {
      return {
        ...state,
        state: null,
      };
    }
    case Actions.SELECTED_MENUITEM:{
      return{
        ...state,
        state:null,
        selectionAction:true,
        selectedItem:action.payload ,
        when:action.when

      }
    }
    default: {
      return state;
    }
  }
};
export default menu