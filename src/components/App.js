import { Component } from 'react';
import { nanoid } from 'nanoid';
// import { ColorPicker } from './ColorPicker/ColorPicker';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
import { TodoList } from './TodoList/TodoList';
import { TodoEditor } from './TodoList/TodoEditor';
import { Filter } from './TodoList/Filter';
import { Form } from './Form';
import initialTodos from '../todos.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export class App extends Component {
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { todos, filter } = this.state;

    const totalTodosCount = todos.length;

    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <div>
        {/* <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Counter initialValue={10} />
        <Dropdown /> */}
        <Form onSubmit={this.formSubmitHandler} />

        <TodoEditor onSubmit={this.addTodo} />
        <div>
          <p>Общее количество: {totalTodosCount}</p>
          <p>Completed количество: {completedTodoCount}</p>
        </div>
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}
