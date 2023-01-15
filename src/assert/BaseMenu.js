import React from 'react';
import {Menu} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../store/menu';

const BaseMenu = (props) => {
    return (
        <Menu
        id="lock-menu"
        anchorEl={props.state}
        keepMounted
        open={Boolean(props.state)}
        onClose={props.closeMenu}
        {...props.options}
      />
      
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeMenu: Actions.closeMenu
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        state  : state.menu.state,
        options: state.menu.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseMenu);
