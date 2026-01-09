import { useState } from "react";

const Body = () => {
  const [task, setTask] = useState("");      
  const [tasks, setTasks] = useState([]);   

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <div className="d-flex mb-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-success" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.length === 0 && (
          <li className="list-group-item text-center">No tasks</li>
        )}
        {tasks.map((t, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              <strong>{index + 1}.</strong> {t} 
            </span>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
