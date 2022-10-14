import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 400px;
  padding: 20px;
  border: 1px solid black;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  background-color: teal;
  color: white;
`;

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;
    return (
      <Container>
        <button type="button" onClick={this.toggle}>
          {visible ? 'Hide' : 'Show'}
        </button>
        {/* <button type="button" onClick={this.show}>
          Показать
        </button>
        <button type="button" onClick={this.hide}>
          Close
        </button> */}

        {visible && <DropdownMenu>Выпадающее меню</DropdownMenu>}
      </Container>
    );
  }
}
