import { Flex, Relative, Absolute as _Absulute } from '@elementary/components';

export default ({ children, dark, withHeader: _withHeader }) => (
  <Relative>
    <Flex
      direction="column"
      bg={dark ? '#0C0F0A' : 'inherit'}
      color={dark ? 'white' : 'black'}
      pb="40px"
    >
      {children}
    </Flex>
  </Relative>
);
