import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTask from "./EditTask";

const TaskItem = ({ task, completeTask, editTask, deleteTask }) => {
  return (
    <div
      key={task.id}
      className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow transition-colors duration-300"
    >
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed || false}
            className="mr-2 h-4 w-4"
            onChange={() => completeTask(task.id)}
          />
          <p className={`${task.completed ? 'line-through' : ''}`}>{task.description}</p>
        </div>
        <div className="flex">
          <EditTask task={task} editTask={editTask}/>
          <button onClick={() => deleteTask(task.id)} className="">
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
