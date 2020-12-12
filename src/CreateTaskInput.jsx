import React from "react";
import { connect } from "react-redux";
import * as tasksActions from "./tasks.actions";

class CreateTaskInput extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onTaskCreate = () => {
    this.props.createTask(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          value={this.state.value}
          onChange={this.handleChange}
          className="create-task__input"
          type="text"
        />
        <button onClick={this.onTaskCreate} className="btn create-task__btn">
          Create
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  createTask: tasksActions.createTask,
};

export default connect(null, mapDispatch)(CreateTaskInput);