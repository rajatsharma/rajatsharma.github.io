import { Flex, Text } from '@elementary/components';

export default ({ details: _details, desc, dest }) => (
  <Flex
    width="180px"
    bg="black"
    color="white"
    p="20px"
    f="24px"
    direction="column"
    border="2px solid #fff"
    boxShadow="5px 6px 0px #fff"
    transition="all 0.5s ease"
    hover={{ boxShadow: 'none' }}
  >
    <Text fontWeight="bolder" pb="5px" f="20px !important">
      {dest}
    </Text>
    <Text f="16px !important">{desc}</Text>
  </Flex>
);
