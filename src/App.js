import React, { useState } from "react";
import "./App.css";

const ToDoList = () => {
  const [taskInput, setTaskInput] = useState(""); // Initialization of input state to get & update the value input user.
  const [tasks, setTasks] = useState([]); // Initialization of state tasks list to render.

  // Function to add a task
  const handleAdd = event => {
    event.preventDefault();
    // Copy of tasks array
    const newTasks = [...tasks];
    // Add the task to tasks array
    newTasks.push({ todo: taskInput, isDone: false });
    // Update the value of tasks
    setTasks(newTasks);
    // Reset the value of input
    setTaskInput("");
  };

  // Function to mark the task as done or not
  const handleDone = index => {
    // Copy of tasks array
    const newTasks = [...tasks];
    // Update the state of state (done or not done)
    newTasks[index].isDone = !newTasks[index].isDone;
    // Update the value of tasks
    setTasks(newTasks);
  };

  // Function to delete the task selected
  const handleRemove = index => {
    // Copy of tasks array
    const newTasks = [...tasks];
    // Delete the task
    newTasks.splice(index, 1);
    // Update the value of tasks
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <div>
        <h1>To Do List</h1>

        <ul className="tasks-list">
          {/* Browse tasks array to render each task */}
          {tasks.map((task, index) => {
            return (
              <div className="task">
                <span
                  className={task.isDone ? "redcross" : ""}
                  onClick={handleRemove}
                >
                  x
                </span>
                <li
                  key={index}
                  onClick={() => {
                    handleDone(index);
                  }}
                  className={task.isDone ? "done" : ""}
                >
                  {task.todo}
                </li>
              </div>
            );
          })}
        </ul>
        <form
          onSubmit={event => {
            handleAdd(event);
          }}
        >
          <input
            className="input"
            type="text"
            value={taskInput}
            onChange={event => {
              setTaskInput(event.target.value);
            }}
          ></input>
          <input
            className="submit"
            type="submit"
            value="AJOUTER UNE TÂCHE"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default ToDoList;
