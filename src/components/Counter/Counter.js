import { Component } from 'react';
import { Controls } from './Controls';
import { Value } from './Value';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
  text-align: center;
`;

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0, //обьявление дефолтных пропов
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue, //передача знаения через проп
  };
  //   state = {
  //     value: 0,
  //   };

  handleIncrement = event => {
    const target = event.target; //надо сохранять в переменную
    console.log(target); //event доступен только в синхронном коде
    // this.setState({
    //   value: 123, //setState с обьектом используем если надо поменять значение не основываясь на предыдущем
    // });
    //для изменений основаных на предыдущем значении используем функцию
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Value initValue={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </Container>
    );
  }
}
