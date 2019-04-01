import styled from 'styled-components'; //eslint-disable-line
import Fold from './components/Fold';

const CVContainer = styled.div`
  h3 {
    font-size: 70px;
    font-family: 'Roboto', sans-serif;
  }
  p {
    font-family: 'Roboto', sans-serif;
    color: black;
    margin-top: -80px;
    word-break: break-all;
    font-size: 90px;
  }
`;

export default () => (
  <Fold>
    <CVContainer className="standard-margin">
      <h3>Mail me at</h3>
      <p>rajatsharma034@gmail.com</p>
    </CVContainer>
  </Fold>
);
