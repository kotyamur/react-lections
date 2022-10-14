import styled from 'styled-components';

const ContainerValue = styled.span`
  margin-right: 15px;
  margin-left: 15px;
  font-size: 64px;
  font-family: monospace;
  text-align: center;
`;

export const Value = ({ initValue }) => {
  return <ContainerValue>{initValue}</ContainerValue>;
};
