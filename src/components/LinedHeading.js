import { Text } from '@elementary/components';

// export default styled.h2`
//   font-family: 'Roboto', sans-serif;
//   width: 100%;
//   font-size: 90px;
//   padding-bottom: 5px;
//   border-bottom: ${props => (!props.noLine ? 'solid 6px black' : 'unset')};
// `;

export default ({ noLine, ...props }) => (
  <Text
    is="h2"
    w={({ theme }) => theme.breakpoints(['100%', '100%'])}
    f={({ theme }) => theme.breakpoints(['60px', '100px'])}
    className="roboto"
    my="30px"
    pb="5px"
    borderBottom={!noLine ? 'solid 6px black' : 'unset'}
    {...props}
  />
);
