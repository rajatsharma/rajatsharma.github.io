import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => (props.dark ? '#0C0F0A' : 'inherit')};
  color: ${props => (props.dark ? 'white' : 'black')};
  padding-bottom: 40px;
`;
