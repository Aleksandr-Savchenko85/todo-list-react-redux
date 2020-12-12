import React from "react";
import classNames from "classnames";

const Task = ({ deleteTask, done, id, text, updateTask }) => {
  return (
    <li
      className={classNames("list-item", {
        "list-item_done": done,
      })}
    >
      <input
        defaultChecked={done}
        type="checkbox"
        className="list-item__checkbox"
        onChange={() => updateTask(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        onClick={() => deleteTask(id)}
        className="list-item__delete-btn"
      ></button>
    </li>
  );
};

export default Task;