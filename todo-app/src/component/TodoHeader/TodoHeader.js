import React from "react";
import './TodoHeader.css'
import moment from "moment";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialogModal from "../Dialog/DialogModal";
import DisplayTodo from '../DisplayTodo/DisplayTodo'

const whiteColor = '#fff';

const style = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%'
    },
    finished: {
        fontSize: '46px',
        color: whiteColor,
    },
    total: {
        display: 'flex',
        flexDirection: 'column',
        color: whiteColor
    },
    weekDay: {
        color: whiteColor,
        fontSize: '28px',
    },
    date: {
        color: whiteColor,
        fontSize: '28px',
        marginLeft: 10
    }
}


const TodoHeader = ({
                        handleOpenDialog, isOpen, formData,
                        handleSetFieldValue, handleSetTodoOnSubmit,
                        isOpenDisplayTodo,handleCloseButton,
                        handleEditTodo,handleRemoveTodo
                    }) => {
    const weekDay = moment().format('dddd');
    const date = moment().date();

    return (
        <div className={'todo-header'}>
            <div style={style.wrapper}>
                <div className={'todos-count'}>
                    <span style={style.finished}>2</span>

                    <div style={style.total}>
                        <span>Tasks</span>
                        <span>/ 10</span>
                    </div>
                </div>

                <div>
                    <span style={style.weekDay}>{weekDay}</span>
                    <span style={style.date}>{date}</span>
                </div>
            </div>

            <div className={'add-todo'} onClick={handleOpenDialog}>
                <AddCircleIcon color={'primary'}/>
                <span className={'icon-background'}/>
            </div>

            <DialogModal
                handleOpenDialog={handleOpenDialog}
                isOpen={isOpen}
                formData={formData}
                handleSetFieldValue={handleSetFieldValue}
                handleSetTodoOnSubmit={handleSetTodoOnSubmit}
            />

            <DisplayTodo
                formData={formData}
                isOpen={isOpenDisplayTodo}
                handleCloseButton={handleCloseButton}
                handleEditTodo={handleEditTodo}
                handleRemoveTodo={handleRemoveTodo}
            />
        </div>
    )
}

export default TodoHeader;