import React from "react";
import './DisplayTodo.css'
import Dialog from "@mui/material/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";


const DisplayTodo = ({isOpen, formData, handleCloseButton, handleEditTodo, handleRemoveTodo}) => {
    return (
        <Dialog open={isOpen} onClose={handleCloseButton}>
            <MuiDialogTitle>
                <div className={'display-todo-title'}>
                    Your Todo
                </div>
            </MuiDialogTitle>

            <MuiDialogContent>
                <div>
                    <h2>{formData.todoName}</h2>
                    <div>{formData.todoNote}</div>
                </div>
            </MuiDialogContent>

            <MuiDialogActions>
                <div className={'display-buttons-wrapper'}>
                    <Button onClick={handleRemoveTodo} color={'secondary'} variant={'outlined'}>Remove</Button>

                    <div>
                        <Button onClick={handleCloseButton} color={'primary'}>Close</Button>
                        <Button onClick={handleEditTodo} color={'primary'}>Edit</Button>
                    </div>

                </div>
            </MuiDialogActions>
        </Dialog>
    )
}

export default DisplayTodo;