import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todo/ToDoList';
import ToDoJson from './todo/todo.json';

ReactDOM.render(<ToDoList tasks={ToDoJson.tasks}/>, document.querySelector("#app"));