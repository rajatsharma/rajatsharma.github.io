import { Text } from '@elementary/components';

export default function LineHeading({
  noLine,
  ...props
}: {
  noLine?: boolean;
  children: React.ReactNode;
}) {
  return (
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
}
