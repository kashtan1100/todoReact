import React from "react";
import './DialogModal.css'
import Dialog from '@mui/material/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const DialogModal = ({handleOpenDialog,isOpen,handleSetFieldValue,formData,handleSetTodoOnSubmit}) => {
    return (
        <Dialog open={isOpen} onClose={handleOpenDialog}>
            <MuiDialogTitle>{formData.isEdit ? 'Edit Todo' : 'Add new Todo'}</MuiDialogTitle>

            <MuiDialogContent>
                <form onSubmit={handleSetTodoOnSubmit}>
                    <TextField label={'Todo'} variant={'outlined'}
                               onChange={(e) => handleSetFieldValue('todoName',e.target.value)}
                               value={formData.todoName}/>

                    <TextField label={'Note'} variant={'outlined'}
                               onChange={(e) => handleSetFieldValue('todoNote',e.target.value)}
                               value={formData.todoNote}
                               multiline
                               minRows={4}/>

                    <MuiDialogActions>
                        <Button onClick={ handleOpenDialog } color={'primary'}>Close</Button>
                        <Button disabled={!formData.todoName} type={'submit'} color={'primary'}>
                            {formData.isEdit ? 'Edit' : 'Add'}
                        </Button>
                    </MuiDialogActions>
                </form>
            </MuiDialogContent>
        </Dialog>
    )
}

export default DialogModal;