import React from "react";
import './DialogModal.css'
import Dialog from '@mui/material/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const DialogModal = ({handleOpenDialog,isOpen,handleSetFieldValue,formData}) => {
    return (
        <Dialog open={isOpen} onClose={handleOpenDialog}>
            <MuiDialogTitle>Add new Todo</MuiDialogTitle>

            <MuiDialogContent>
                <form onSubmit={() => {
                }}>
                    <TextField label={'Todo'} variant={'outlined'}
                               onChange={(e) => handleSetFieldValue('todoName',e.target.value)}
                               value={formData.todoName}/>

                    <TextField label={'Note'} variant={'outlined'}
                               onChange={(e) => handleSetFieldValue('todoNote',e.target.value)}
                               value={formData.todoNote}/>
                               multiline
                               minRows={4}
                    />

                    <MuiDialogActions>
                        <Button onClick={ handleOpenDialog } color={'primary'}>Close</Button>
                        <Button disabled={false} type={'submit'}
                                onClick={ () => {} } color={'primary'}>Add</Button>
                    </MuiDialogActions>
                </form>
            </MuiDialogContent>
        </Dialog>
    )
}

export default DialogModal;