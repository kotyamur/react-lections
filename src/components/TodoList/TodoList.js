import styled from 'styled-components';
import { Todo } from './Todo';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TodoListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;

    background-color: green;
    transform: scaleX(0);
    transform: ${p => {
      return p.completed ? 'scaleX(1)' : '1scaleX(0)';
    }};

    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <Container>
    {todos.map(({ id, text, completed }) => (
      <TodoListItem key={id} completed={completed}>
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </TodoListItem>
    ))}
  </Container>
);
