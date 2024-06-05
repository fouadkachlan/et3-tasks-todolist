import React, { useState } from "react";
import Button from "../Button/Button";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue(""); // Clear input after adding task
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
    <div className="todocontainer">
      <h2>To-Do List</h2>
      <input
        placeholder="Enter a Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className="btn" onClick={() => editTodo(index, prompt("Enter new task", todo))}>
              Edit
            </button>
            <button className="btn" onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
      <Button onClick={addTodo} btnStyle={
                        {padding:"15px",
                          border: "20px",
                          borderRadius: "50px 50px",
                          backgroundCcolor:"chartreuse"}}
       >
        Add Task
        </Button>
    </div>
  );
};

export default TodoList;
//Questions answers
//if we have an array const numbers=[100,200,300];
//array.reduce is a method available in JavaScript arrays. It iterates over each element of the array and allows you to accumulate a single value based on those elements. The reduce method takes a callback function and an initial value as arguments. The callback function, also known as the reducer function, takes four parameters: the accumulator, the current value, the current index, and the array itself. The reducer function returns the accumulated value, which becomes the accumulator in the next iteration.
//map() is a method that iterates over each element of an array and allows you to transform each element according to a provided function. It returns a new array with the results of applying the provided function to each element of the original array, without mutating the original array. The provided function receives three arguments: the current element, the index of the current element, and the array being traversed.
//filter() is a method that iterates over each element of an array and creates a new array with all elements that pass a provided test. It returns a new array containing only the elements for which the provided function returns true. Similar to map(), it doesn't mutate the original array. The provided function receives three arguments: the current element, the index of the current element, and the array being traversed.
//forEach(): Executes a provided function once for each array element, allowing you to perform a specific action on each element.
//find(): Returns the first element in the array that satisfies a provided testing function, or undefined if no such element is found.
//sort(): Sorts the elements of an array in place and returns the sorted array. By default, it sorts elements alphabetically/numerically. You can provide a custom sorting function as an argument to sort based on specific criteria.

