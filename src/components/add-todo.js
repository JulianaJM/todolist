import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import classNames from 'classnames';
import postit from '../assets/images/postit.jpg';
import { addTodo } from '../actions/add-todo';

import './add-todo.scss';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.task.trim()) {
      return;
    }
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <div className="outer-div">
        <div className="inner-div">
          <h1><img src={postit} alt="post it" width="70px" heigth="70px" />Todo list</h1>
          <section>
            <form onSubmit={this.handleSubmit} >
              <input type="text" name="task" value={this.state.task} onChange={this.handleChange} placeholder="need something ..." maxLength="60" />
              <input type="submit" value="Create new task" className={classNames('link-button', { disabled: this.state.task === '' })} />
            </form>
          </section>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: func.isRequired,
};

export default connect(null, { addTodo })(AddTodo);
