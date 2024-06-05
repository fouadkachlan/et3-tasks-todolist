import React, { useState } from "react";
import Button from "../Button/Button";
import CustomDiv from "../CustomDiv/CustomDiv";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const trimmedInput = inputValue.trim();
    if (trimmedInput !== "") {
      setTodos([...todos, trimmedInput]);
      setInputValue("");
    }
  };

  const editTodo = (index, updatedTodo) => {
    if (typeof updatedTodo !== "string") {
      console.error("Updated task must be a string.");
      return;
    }

    const updatedTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
    setTodos(updatedTodos);
  };

  const deleteTodo = (taskToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== taskToDelete);
    setTodos(updatedTodos);
  };

  return (
    <CustomDiv
      divStyle={{
        display: "grid",
        gridTemplateColumns: "650px",
        backgroundColor: "bisque",
        margin: "5rem",
        padding: "50px",
        borderRadius: "150px 50px"
      }}
    >
      <h2>To-Do List</h2>
      <input
        style={{ padding: "2rem" }}
        placeholder="Enter a Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button
              buttonStyle={{
                backgroundColor: "chartreuse",
                margin: "10px",
                padding: "25px",
                border: "1px solid black", // Ensure valid border property
                borderRadius: "50px"
              }}
              onClick={() => {
                const newTask = prompt("Enter new task", todo);
                if (newTask !== null) {
                  editTodo(index, newTask);
                }
              }}
            >
              Edit
            </Button>
            <Button
              buttonStyle={{
                backgroundColor: "chartreuse",
                margin: "10px",
                padding: "25px",
                border: "1px solid black", // Ensure valid border property
                borderRadius: "50px"
              }}
              onClick={() => deleteTodo(todo)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <Button
        buttonStyle={{
          padding: "15px",
          border: "1px solid black", // Ensure valid border property
          borderRadius: "50px",
          backgroundColor: "chartreuse"
        }}
        onClick={addTodo}
      >
        Add Task
      </Button>
    </CustomDiv>
  );
};

export default TodoList;
