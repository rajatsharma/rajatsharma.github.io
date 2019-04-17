import { Flex } from '@elementary/components';
// import styled from 'styled-components';

// export default styled.div`
//   display: flex;
//   flex-direction: column;
//   background: ${props => (props.dark ? '#0C0F0A' : 'inherit')};
//   color: ${props => (props.dark ? 'white' : 'black')};
//   padding-bottom: 40px;
// `;

export default ({ dark, ...props }) => (
  <Flex
    py={({ theme }) =>
      theme.breakpoints([theme.margins.moby, theme.margins.des])
    }
    px={({ theme }) =>
      theme.breakpoints([theme.margins.mobx, theme.margins.des])
    }
    direction="column"
    color={dark ? 'white' : 'black'}
    bg={dark ? 'black' : 'white'}
    {...props}
  />
);
