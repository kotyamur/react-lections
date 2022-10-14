import { Component } from 'react';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { TodoList } from './TodoList/TodoList';
import initialTodos from '../todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodosCount = todos.length;

    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <div
        style={{
          height: '100vh',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Counter initialValue={10} />
        <Dropdown />
        <div>
          <p>Общее количество: {totalTodosCount}</p>
          <p>Completed количество: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
