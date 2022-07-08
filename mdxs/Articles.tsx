import Button from '../components/Button';
import LineLink from '../components/LineLink';
import LineHeading from '../components/LineHeading';

export default function Articles() {
  return (
    <>
      <LineHeading noLine>Articles</LineHeading>

      <h1>Functors in JavaScript</h1>

      <p>
        “A mathematician, like a painter or a poet, is a maker of patterns. If
        his patterns are more permanent than theirs, it is because they are made
        with ideas.”{' '}
        <LineLink href="https://github.com/rajatsharma/rajatsharma.github.io">
          Read More
        </LineLink>
      </p>

      <Button onClick={() => window.open('https://medium.com/@lunasunkaiser/')}>
        View All Articles
      </Button>
    </>
  );
}
