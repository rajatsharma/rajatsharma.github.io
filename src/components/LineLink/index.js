import styled from 'styled-components'; //eslint-disable-line

export default styled.a`
  font-family: 'Inconsolata', monospace;
  text-decoration: none;
  font-weight: bolder;
  display: inline-block;
  position: relative;
  color: ${props => (props.dark ? '#000' : '#fff')};
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${props => (props.dark ? '#000' : '#fff')};
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
