import LineLink from '../components/LineLink';
import LineHeading from '../components/LineHeading';

export default function Colophon() {
  return (
    <>
      <LineHeading>Colophon.</LineHeading>

      <p>
        Made with :heart: and regime/static by Rajat Sharma{' '}
        <LineLink
          dark
          href="https://github.com/rajatsharma/rajatsharma.github.io"
        >
          Source Code
        </LineLink>
      </p>
    </>
  );
}
