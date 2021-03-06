import React from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import classNames from "classnames";
import { addTodo } from "../actions/add-todo";

import postit from "../../images/postit.jpg";
import "./add-todo.scss";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { task } = this.state;
    const { addTodo } = this.props;
    if (!task.trim()) {
      return;
    }
    addTodo(task);
    this.setState({ task: "" });
  }

  render() {
    const { task } = this.state;

    return (
      <div className="outer-div">
        <div className="inner-div">
          <h1>
            <img src={postit} alt="" width="70px" heigth="70px" />
            My tasks list
          </h1>
          <section>
            <form id="write-task" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="task"
                value={task}
                onChange={this.handleChange}
                placeholder="need something ..."
                maxLength="60"
              />
              {/* submit button */}
              <input
                type="submit"
                value="Create new task"
                className={classNames("link-button", {
                  disabled: task === ""
                })}
              />
            </form>
          </section>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: func.isRequired
};

export default connect(
  null,
  { addTodo }
)(AddTodo);
