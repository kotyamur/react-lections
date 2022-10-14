import styled from 'styled-components';

const Container = styled.ul`
  width: 600px;
`;

const TodoListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid black;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;

    background-color: $green;
    transform: ${p => {
      return p.completed ? 'scaleX(1)' : '1scaleX(0)';
    }};
    /* transform: scaleX(0); */
    transition: transform 250ms $timing-function;
  }
`;

const TodoListText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
  text-decoration: ${p => {
    return p.completed ? ' line-through' : 'none';
  }};
`;

const TodoListCheckbox = styled.input`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <Container>
    {todos.map(({ id, text, completed }) => (
      <TodoListItem key={id} completed={completed}>
        <TodoListCheckbox
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <TodoListText>{text}</TodoListText>

        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </TodoListItem>
    ))}
  </Container>
);
