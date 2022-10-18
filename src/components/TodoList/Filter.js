import styled from 'styled-components';

const TodoFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  margin-top: 0;
  margin-bottom: 20px;
  input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;

    font-family: inherit;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }
`;

export const Filter = ({ value, onChange }) => (
  <TodoFilter>
    Фильтр по имени
    <input type="text" value={value} onChange={onChange} />
  </TodoFilter>
);
