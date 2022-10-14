import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.form`
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const TodoEditorTextarea = styled.textarea`
  line-height: 16px;

  height: 72px;
  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`;

const TodoEditorButton = styled.button`
  width: 100%;
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #3f51b5;
  color: white;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  render() {
    return (
      <Container onSubmit={this.handleSubmit}>
        <TodoEditorTextarea
          value={this.state.message}
          onChange={this.handleChange}
        ></TodoEditorTextarea>
        <TodoEditorButton type="submit">Сохранить</TodoEditorButton>
      </Container>
    );
  }
}
