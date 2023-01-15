import React from 'react';
import {Dialog} from '@material-ui/core';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../store/dialog';

const BaseDialog = (props) => {
    return (
        <Dialog
            open={props.state}
            onClose={props.closeDialog}
            aria-labelledby="dialog-title"
            {...props.options}
        />
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        closeDialog: Actions.closeDialog
    }, dispatch);
}

function mapStateToProps(state)
{
    return {
        state  : state.dialog.state,
        options: state.dialog.options
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseDialog);
