import Link from 'Link.regime';
import './style.scss';
import ProjectCard from './components/ProjectCard';
import Intro from './intro.mdx';
import Contact from './contact.mdx';

export default () => (
  <>
    <Fold withHeader>
      <Hero />
    </Fold>
    <Fold dark>
      <div className="standard-margin intro">
        <Intro />
      </div>
    </Fold>
    <Fold>
      <div className="standard-margin contact">
        <Contact />
      </div>
    </Fold>
  </>
);
