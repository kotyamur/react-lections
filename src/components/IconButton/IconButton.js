import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconBtn = styled.button`
  margin: 0;
  padding: 10px;
  border: none;
  border-radius: 50%;
  color: white;
  font: inherit;
  background-color: #3f51b5;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton = ({ children, onClick, ...allyProps }) => (
  <IconBtn type="button" onClick={onClick} {...allyProps}>
    {children}
  </IconBtn>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
