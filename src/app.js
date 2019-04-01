import './style.scss';
import Fold from './components/Fold';
import Hero from './components/Hero';
import Intro from './intro.mdx';
import Contact from './contact';
import Articles from './articles.mdx';

export default () => (
  <>
    <Fold withHeader>
      <Hero />
    </Fold>
    <Fold dark>
      <div className="standard-margin intro">
        <Intro />
      </div>
      <div className="standard-margin articles">
        <Articles />
      </div>
    </Fold>
    <Fold>
      <div className="standard-margin contact">
        <Contact />
      </div>
    </Fold>
  </>
);
