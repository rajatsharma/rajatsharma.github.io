import { Text } from '@elementary/components';

export default function Hero() {
  return (
    <Text
      is="h1"
      maxWidth={({ theme }) => theme.breakpoints(['200px', '380px'])}
      f={({ theme }) => theme.breakpoints(['75px', '100px'])}
      className="roboto"
    >
      Hi, I am Rajat Sharma
    </Text>
  );
}
