import styled from 'styled-components';
import Link from 'Link';

const SideLinks = styled.div`
  display: flex;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  a {
    padding-left: 10px;
    text-decoration: none;
    color: unset;
  }
`;

const MainLink = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: unset;
`;

export default () => (
  <div className="header standard-margin">
    <MainLink to="/">rajatsharma.dev</MainLink>
    <SideLinks>
      <a
        href="https://github.com/rajatsharma"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      <Link to="/cv">Contact</Link>
    </SideLinks>
  </div>
);
