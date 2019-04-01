import styled from 'styled-components';

const LinkStyle = styled.a`
  text-decoration: none;
  color: unset;
  font-size: 35px;
`;

export default props => (
  <LinkStyle {...props} target="_blank" rel="noopener noreferrer" />
);
