import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({text,category, todo, todos, setTodos}) => {

    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id ){
                return{
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    let upperCaseCategory = category.toUpperCase();

    return(
        <div className="todo">
            <div className="Category-box">
                {upperCaseCategory}
            </div>
            <div className="todo-box">
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                    {text}
                </li>
                <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    )


}

export default Todo;

Todo.propTypes = {
    text: PropTypes.string,
    category: PropTypes.string,
    deleteHandler: PropTypes.func,
    completeHandler: PropTypes.func
}
