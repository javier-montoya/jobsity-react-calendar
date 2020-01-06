import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { closeReminderDialog } from "../../actions/reminderDialogActions";
import { createReminder } from "../../actions/reminderActions";
import ReminderForm from "../ReminderForm";

const ReminderDialog = () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.reminderDialog.open);
  const onSubmit = reminder => {
    dispatch(createReminder(reminder));
    dispatch(closeReminderDialog())
  };

  return (
    <Dialog
      open={open}
      onClose={() => dispatch(closeReminderDialog())}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Add Reminder"}</DialogTitle>
      <DialogContent>
        <ReminderForm submitCallback={onSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default ReminderDialog;
