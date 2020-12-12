import React, { useEffect } from "react";
import { connect } from "react-redux";
import { sortedTasksListSelector } from "./tasks.selectors";
import * as tasksActions from "./tasks.actions";
import Task from "./Task";
import PropTypes from 'prop-types';

const TasksList = ({ tasksList, getTasksList, deleteTask, updateTask }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <ul className="list">
      {tasksList.map((task) => (
        <Task
          key={task.id}
          {...task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
};

const mapState = (state) => {
  return {
    tasksList: sortedTasksListSelector(state),
  };
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  deleteTask: tasksActions.deleteTask,
  updateTask: tasksActions.updateTask,
};

export default connect(mapState, mapDispatch)(TasksList);

TasksList.propTypes = {
  tasksList: PropTypes.array,
  getTasksList: PropTypes.func,
  deleteTask: PropTypes.func,
  updateTask: PropTypes.func,
} 