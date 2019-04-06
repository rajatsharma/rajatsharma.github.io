import styled from 'styled-components';

const Card = styled.a`
  background: white;
  color: black;
  padding: 20px;
  font-size: 24px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

const Text = styled.h6`
  font-weight: bolder;
  padding-bottom: 5px;
  font-size: ${props => (props.mid ? '16px !important' : '20px !important')};
`;

export default ({ details: _details, desc, dest, className, link }) => (
  <Card
    href={`https://github.com/rajatsharma/${link}`}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Text>{dest}</Text>
    <Text mid>{desc}</Text>
  </Card>
);
