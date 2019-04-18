// import { Flex } from '@elementary/components';
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
    <Fold black>
      <Intro />
    </Fold>
    <Fold black>
      <div className="articles">
        <Articles />
      </div>
    </Fold>
    <Fold>
      <div className="contact">
        <Contact />
      </div>
    </Fold>
  </>
);
