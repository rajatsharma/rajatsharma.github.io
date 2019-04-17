// eslint-disable-next-line import/no-unresolved
// import styled from 'styled-components';
import { Button } from '@elementary/components';

// export default styled.button`
//   background: transparent;
//   height: 50px;
//   font-size: 20px;
//   width: 200px;
//   border: 2px solid #fff;
//   box-shadow: 5px 6px 0px #fff;
//   color: white;
//   font-family: inherit;
//   transition: all 0.5s ease;
//   &:hover {
//     border: none;
//     box-shadow: none;
//     color: black;
//     background-color: white;
//   }
// `;

export default props => (
  <Button
    bg="transparent"
    h="50px"
    color="white"
    f="20px"
    hover={{
      color: 'black',
      backgroundColor: 'white',
      border: 'none',
      boxShadow: 'none',
    }}
    transition="all 0.5s ease"
    w={({ theme }) => theme.breakpoints(['100%', '200px'])}
    boxShadow="5px 6px 0px #fff"
    border="2px solid #fff"
    {...props}
  />
);
