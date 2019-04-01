import styled from 'styled-components';

export default styled.h2`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-size: 90px;
  padding-bottom: 5px;
  border-bottom: ${props => (!props.noLine ? 'solid 6px black' : 'unset')};
`;
