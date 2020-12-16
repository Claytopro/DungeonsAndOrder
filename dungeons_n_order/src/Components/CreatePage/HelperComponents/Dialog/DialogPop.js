import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


function SimpleDialog(props) {
  
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Character Created!</DialogTitle>
      <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can view you characters by selection the character screen on you side bar
          </DialogContentText>
        </DialogContent>
    </Dialog>
  );
}

export default SimpleDialog;


