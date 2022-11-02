import { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
import { AppTodoList } from './TodoList/AppTodoList';
// import { Form } from './Form';
import colorPickerOptions from '../colorPickerOptions.json';
import { Reader } from './Reader/Reader';
import publications from '../publications.json';

const Container = styled.div`
  width: 600px;
  padding: 15px 40px;
  nav {
    border-bottom: 1px solid black;
  }
`;

const StyledLink = styled(NavLink)`
  color: black;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &.active {
    color: orange;
  }
`;

export class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return (
      <Container>
        <nav>
          <StyledLink to="/colorPicker" end>
            ColorPicker
          </StyledLink>
          <StyledLink to="/counter">Counter</StyledLink>
          <StyledLink to="/dropdown">Dropdown</StyledLink>
          <StyledLink to="/reader">Reader</StyledLink>
          <StyledLink to="/todoList">AppTodoList</StyledLink>
        </nav>

        <Routes>
          <Route
            path="/colorPicker"
            element={<ColorPicker options={colorPickerOptions} />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/reader" element={<Reader items={publications} />} />
          <Route path="/todoList" element={<AppTodoList />} />
        </Routes>
        {/* <Reader items={publications} /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <AppTodoList /> */}
      </Container>
    );
  }
}
