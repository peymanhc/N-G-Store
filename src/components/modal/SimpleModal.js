import React from "react";
import Modal from "@material-ui/core/Modal";
import { Box } from "@material-ui/core";

function SimpleModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box className={props.className}>{props.body}</Box>
      </Modal>
    </div>
  );
}
export default SimpleModal;
