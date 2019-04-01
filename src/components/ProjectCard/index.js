import { Flex, Text } from '@elementary/components';

export default ({ details: _details, desc, dest, className }) => (
  <Flex
    bg="white"
    color="black"
    p="20px"
    f="24px"
    direction="column"
    className={className}
  >
    <Text fontWeight="bolder" pb="5px" f="20px !important" is="h6">
      {dest}
    </Text>
    <Text f="16px !important">{desc}</Text>
  </Flex>
);
