import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert } from '../store/action';
import { Alert } from './Alert';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  submiteHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      this.props.showAlert('название поста не может быть пустым');
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.setState({ title: '' });
    this.props.createPost(newPost);
  };

  changeInputHandler = (evenet) => {
    evenet.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [evenet.target.name]: evenet.target.value },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submiteHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
