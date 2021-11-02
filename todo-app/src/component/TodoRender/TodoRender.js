import React from "react";
import './TodoRender.css'
import ArrowForwardIsoIcon from '@material-ui/icons/ArrowForwardIos'
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

const Todo = ({todo, handleMarkTodo, index, handleOpenTodo}) => {
    const isFinishedTodo = todo.isFinished && 'todo-finished'
    return (
        <div className={'todo-container'}>
            <span>
                <Checkbox
                    icon={<RadioButtonUnchecked/>}
                    checkedIcon={<CheckCircleOutlineIcon color={'primary'}/>}
                    onClick={(e: any) => handleMarkTodo(e.target.checked, index)}
                    checked={todo.isFinished}
                />
            </span>
            <div className={'todo-item'}
                 onClick={ () => handleOpenTodo({...todo, index})}>
                <span className={isFinishedTodo}>{todo.todoName}</span>
                <ArrowForwardIsoIcon fontSize={'small'}/>
            </div>
        </div>
    )
}

const TodoRender = ({todos, handleMarkTodo, handleOpenTodo}) => {
    return (
        <div className={'todos-wrapper'}>
            {todos.map((todo, index) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleMarkTodo={handleMarkTodo}
                    index={index}
                    handleOpenTodo={handleOpenTodo}
                />))}
        </div>
    )
}

export default TodoRender;