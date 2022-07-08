import { Flex, Link as A } from '@elementary/components';
import styled from 'styled-components';
import Link from 'next/link';

const SideLinks = styled.div`
  display: flex;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
`;

export default function Header() {
  return (
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
      <Link href="/">rajatsharma.dev</Link>
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
        <A
          href="/contact"
          is={Link}
          pl="10px"
          textDecoration="none"
          color="unset"
        >
          Contact
        </A>
        <A
          href="/rajatsharma.pdf"
          target="_blank"
          pl="10px"
          textDecoration="none"
          color="unset"
        >
          Cv
        </A>
      </SideLinks>
    </Flex>
  );
}
