import { Link } from '@elementary/components';

export default function ExternalLinkFormal(props) {
  return (
    <Link
      {...props}
      target="_blank"
      textDecoration="none"
      f={({ theme }) => theme.breakpoints(['21px', '35px'])}
      color="unset"
      rel="noopener noreferrer"
    />
  );
}
