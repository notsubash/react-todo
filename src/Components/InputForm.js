import React from 'react';


import PropTypes from 'prop-types';

const InputForm = ({inputText, setInputText, handleShow}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    
    return(
        <div className="form-container">
                <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className = "todo-input"
                autoFocus
                />
                <button
                    type= "button"
                    onClick={handleShow}
                    className = "todo-button"
                    >
                    <i className = "fas fa-plus-square"></i>
                </button>
        </div>
    )
}

export default InputForm;

InputForm.propTypes = {
    inputText: PropTypes.string,
    inputCategory: PropTypes.string,
    inputTextHandler: PropTypes.func,
    inputCategoryHandler: PropTypes.func,
    submitTodoHandler: PropTypes.func,
    statusHandler: PropTypes.func

}