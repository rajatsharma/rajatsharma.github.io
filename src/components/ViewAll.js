import { Link, Flex } from '@elementary/components';

export default ({ text, link, dark = false }) => (
  <Flex>
    <Link
      to={link}
      color={dark ? 'white' : 'black'}
      f="30px"
      mb="5px"
      mt="15px"
      className="borderLeftRight"
      style={{ cursor: 'pointer' }}
    >
      {text}
    </Link>
  </Flex>
);
