import { Text } from '@elementary/components';
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

export default ({ details: _details, desc, dest, className, link }) => (
  <Card
    href={`https://github.com/rajatsharma/${link}`}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Text fontWeight="bolder" pb="5px" f="20px !important" is="h6">
      {dest}
    </Text>
    <Text f="16px !important">{desc}</Text>
  </Card>
);
