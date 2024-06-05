import React, { useState } from "react";
import Button from "../Button/Button";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); 
    }
  };

  const editTodo = (index, updatedTodo) => {
    const updatedTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (taskToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== taskToDelete);
    setTodos(updatedTodos);
  };
  
  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"650px",
      backgroundColor: "bisque",
      margin: "5rem",
      padding:"50px 50px 50px 50px",
      borderRadius: "150px 50px"
    }} className="todocontainer">
      <h2>To-Do List</h2>
      <input style={{padding:"2rem"}}
        placeholder="Enter a Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button style={{
              backgroundColor: "chartreuse",
              margin: "10px",
              padding: "25px",
              border: "20px",
              borderRadius: "50px 50px"
            }} onClick={() => editTodo(index, prompt("Enter new task", todo))}>
              Edit
            </button>
            <button style={{
              backgroundColor: "chartreuse",
              margin: "10px",
              padding: "25px",
              border: "20px",
              borderRadius: "50px 50px"
            }} onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
      <Button onClick={addTodo}>Add Task</Button>
    </div>
  );
};

export default TodoList;


