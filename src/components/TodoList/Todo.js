import styled from 'styled-components';

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

export const Todo = ({ text, completed, onDelete, onToggleCompleted }) => (
  <>
    <TodoListCheckbox
      type="checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <TodoListText>{text}</TodoListText>

    <button onClick={onDelete}>Удалить</button>
  </>
);
