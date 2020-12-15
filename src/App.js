import React,{ useState, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import InputForm from './Components/InputForm';
import Tags from './Components/Tags'
import TodoList from './Components/TodoList';
import Popup from './Components/Popup'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  //Setting State
  const [inputText, setInputText] = useState("");
  const [inputCategory, setCategory] = useState("");
  const [todos, setTodos ] = useState([]);  
  const [status, setStatus ] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [show, setShow] = useState(false);


  //Javascript 
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    filterHandler();
  }, [todos,status]);

  

  //Function
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  

  //Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };


  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Tags 
        setStatus={setStatus}
      />
      <InputForm 
        inputText = {inputText}
        setInputText = {setInputText}
        handleShow = {handleShow}
      />
      <Popup 
        show = {show}
        inputText = {inputText}
        handleClose = {handleClose}
        setInputText = {setInputText}
        inputCategory = {inputCategory}
        setCategory = {setCategory}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList 
        todos = {todos}
        setTodos = {setTodos}
        filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;

App.propTypes = {
  filterHandler: PropTypes.func,
  saveLocalTodos: PropTypes.func,
  getLocalTodos: PropTypes.func
}


