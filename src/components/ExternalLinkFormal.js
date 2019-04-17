// import styled from 'styled-components';
import { Link } from '@elementary/components';

// const LinkStyle = styled.a`
//   text-decoration: none;
//   color: unset;
//   font-size: 35px;
// `;

export default props => (
  <Link
    {...props}
    target="_blank"
    textDecoration="none"
    f={({ theme }) => theme.breakpoints(['21px', '35px'])}
    color="unset"
    rel="noopener noreferrer"
  />
);
