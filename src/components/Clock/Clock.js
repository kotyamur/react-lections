import React, { Component } from 'react';
import styled from 'styled-components';

const ClockFace = styled.div`
  font-size: 64px;
  text-align: center;
`;

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <ClockFace>{this.state.time}</ClockFace>;
  }
}
