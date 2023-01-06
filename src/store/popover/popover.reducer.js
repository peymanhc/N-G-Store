import * as Actions from './popover.actions';

const initialState = {
    state  : null,
    options: {
        children: 'Hi'
    }
};

const popover = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.OPEN_POPOVER:
        { 
            return {
                ...state,
                state  : action.currentTarget,
                options: {
                    ...state.options,
                    ...action.options
                }
            };
        }
        case Actions.CLOSE_POPOVER:
        {
            return {
                ...state,
                state: null
            };
        }
        default:
        {
            return state;
        }
    }
};

export default popover;
