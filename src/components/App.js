import { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
// import { ColorPicker } from './ColorPicker/ColorPicker';
// import { Counter } from './Counter/Counter';
// import { Dropdown } from './Dropdown/Dropdown';
import { TodoList } from './TodoList/TodoList';
import { TodoEditor } from './TodoList/TodoEditor';
import { Filter } from './TodoList/Filter';
import { Modal } from '../components/Modal/Modal';
import { IconButton } from './IconButton/IconButton';
import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { Form } from './Form';
// import initialTodos from '../todos.json';
// import colorPickerOptions from '../colorPickerOptions.json';
import { Reader } from './Reader/Reader';
import publications from './publications.json';

const Container = styled.div`
  width: 600px;
  padding: 15px 40px;
`;

export class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('didMount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
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

    // this.toggleModal();
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
    const { todos, filter, showModal } = this.state;

    const totalTodosCount = todos.length;

    const completedTodoCount = this.calculateCompletedTodos();
    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <Reader items={publications} />
        {/* <ColorPicker options={colorPickerOptions} />
        <Counter />
        <Counter initialValue={10} />
        <Dropdown />
        <Form onSubmit={this.formSubmitHandler} /> */}

        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}

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
      </Container>
    );
  }
}
