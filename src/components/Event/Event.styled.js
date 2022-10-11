import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border: ${p => `2px dashed ${p.theme.colors.black}`};
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  :hover {
    scale 1.1;
  }
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.secondaryText};
  }
`;

const setBgColor = ({ eventType, theme }) => {
  switch (eventType) {
    case 'free':
      return theme.colors.green;
    case 'paid':
      return theme.colors.blue;
    case 'vip':
      return theme.colors.red;
    default:
      return theme.colors.black;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: ${p => `${p.theme.space[2]}px ${p.theme.space[3]}px`};
  border-radius: 8px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};

  background-color: ${setBgColor};
`;
