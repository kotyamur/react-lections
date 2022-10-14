import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px;
`;

const Title = styled.h2`
  line-height: 1.3;
`;

const ColorPickerOption = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 250ms linear;
  scale: ${p => {
    return p.index === p.activeIdx ? '1.2' : '1';
  }};
  /* :active {
    transform: scale(1.2);
  } */
`;
export class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIndex: index });
  };

  render() {
    const { activeOptionIndex } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIndex];

    return (
      <Container>
        <Title>Color Picker</Title>
        <p>Color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <ColorPickerOption
              key={label}
              style={{ backgroundColor: color }}
              activeIdx={activeOptionIndex}
              index={index}
              onClick={() => this.setActiveIdx(index)}
            ></ColorPickerOption>
          ))}
        </div>
      </Container>
    );
  }
}
