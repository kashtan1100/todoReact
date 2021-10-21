import React, {useState} from "react";
import './Todo.css'
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoActions from "../TodoActions/TodoActions";
import TodoRender from "../TodoRender/TodoRender";


const initialFormData = {
    isEdit: false,
    todoName: '',
    todoNote: '',
    isFinished: false,
    id: '',
    index: null
}

const Todo = () => {
    const [tab, setTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false);
    const [todo, setTodos] = useState([]);
    const [formData, setFormData] = useState(initialFormData);

    const handleOpenDialog = () => setIsOpen((prevState) => !prevState);

    return(
        <div className={'todo-wrapper'}>
            <TodoHeader />

            <TodoActions />

            <TodoRender />
        </div>
    )
}

export default Todo;