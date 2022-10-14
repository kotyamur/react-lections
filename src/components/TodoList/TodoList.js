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
`;

const TodoListText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
`;

export const TodoList = ({ todos, onDeleteTodo }) => (
  <Container>
    {todos.map(({ id, text }) => (
      <TodoListItem key={id}>
        <TodoListText>{text}</TodoListText>
        <button onClick={() => onDeleteTodo(id)}>Удалить</button>
      </TodoListItem>
    ))}
  </Container>
);
