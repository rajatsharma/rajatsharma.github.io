import styled from 'styled-components'; //eslint-disable-line
import { Text } from '@elementary/components';
import Fold from './components/Fold';

export default () => (
  <Fold>
    <Text
      is="h3"
      className="roboto"
      f={({ theme }) => theme.breakpoints(['45px', '70px'])}
    >
      Mail me at
    </Text>
    <Text
      is="p"
      style={{ wordBreak: 'break-all' }}
      f={({ theme }) => theme.breakpoints(['50px', '90px'])}
      className="roboto"
    >
      rajatsharma034@gmail.com
    </Text>
  </Fold>
);
