import { Flex, Relative, Absolute } from '@elementary/components';

export default ({ children, dark, withHeader }) => (
  <Relative>
    <Flex
      bg={dark ? 'black' : 'inherit'}
      color={dark ? 'white' : 'black'}
      pb="40px"
    >
      {children}
    </Flex>
  </Relative>
);
