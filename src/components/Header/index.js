import { Flex, Link as A } from '@elementary/components';
import styled from 'styled-components';
import Link from 'Link';

const SideLinks = styled.div`
  display: flex;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`;

const MainLink = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: unset;
`;

export default () => (
  <Flex
    className="header"
    flex={1}
    mx={({ theme }) => theme.breakpoints(['30px', '90px'])}
    alignItems="center"
    h="100px"
    justifyContent={({ theme }) =>
      theme.breakpoints(['space-around', 'space-between'])
    }
    direction={({ theme }) => theme.breakpoints(['column', 'row'])}
  >
    <MainLink to="/">rajatsharma.dev</MainLink>
    <SideLinks>
      <A
        href="https://github.com/rajatsharma"
        target="_blank"
        textDecoration="none"
        rel="noopener noreferrer"
        color="unset"
      >
        Github
      </A>
      <A to="/cv" is={Link} pl="10px" textDecoration="none" color="unset">
        Contact
      </A>
    </SideLinks>
  </Flex>
);
