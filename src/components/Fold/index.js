import { Flex } from '@elementary/components';

export default ({ withHeader: _withHeader, black: dark, ...props }) => (
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
