// eslint-disable-next-line import/no-unresolved
import styled from 'styled-component';

export default styled.button`
  background: transparent;
  height: 50px;
  font-size: 20px;
  width: 200px;
  border: 2px solid #fff;
  box-shadow: 5px 6px 0px #fff;
  color: white;
  transition: all 0.5s ease;
  &:hover: {
    border: none;
    box-shadow: none;
    color: black;
    background-color: white;
  }
`;
