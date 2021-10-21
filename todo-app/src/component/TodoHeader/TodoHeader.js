import React from "react";
import './TodoHeader.css'
import moment from "moment";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialogModal from "../Dialog/DialogModal";

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


const TodoHeader = () => {
    const weekDay = moment().format('dddd');
    const date = moment().date();

    return(
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

            <div className={'add-todo'}>
                <AddCircleIcon color={'primary'}/>
                <span className={'icon-background'}/>
            </div>

            <DialogModal />
        </div>
    )
}

export default TodoHeader;