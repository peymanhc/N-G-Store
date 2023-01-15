import React from 'react';
import {Popover} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../store/popover';

const BasePopover = (props) => {
    return (
        <Popover
			open={Boolean(props.state)}
			anchorEl={props.state}
			onClose={props.closePopover}
				anchorOrigin={{
					vertical  : 'bottom',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical  : 'top',
					horizontal: 'right'
				}}
			{...props.options}  
        />
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closePopover: Actions.closePopover
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        state  : state.popover.state,
        options: state.popover.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePopover);
