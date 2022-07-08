import Head from 'next/head';
import { Provider } from '@elementary/components';
import Colophon from '../mdxs/Colophon';
import Header from '../components/Header';
import Fold from '../components/Fold';
import Hero from '../components/Hero';
import Intro from '../mdxs/Intro';
import Articles from '../mdxs/Articles';

function App() {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>rajatsharma.dev</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="description"
          content="Hi, I am Rajat Sharma, Full Stack Web Developer with expertise in React-Redux based SSR Applications, Haskell and Purescript"
        />
        <meta property="og:title" content="rajatsharma.dev" />
        <meta
          property="og:description"
          content="Hi, I am Rajat Sharma, Full Stack Web Developer with expertise in React-Redux based SSR Applications, Haskell and Purescript"
        />
        <meta
          property="og:image"
          content="https://avatars2.githubusercontent.com/u/13231434"
        />
        <link rel="canonical" href="https://rajatsharma.dev" />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:900"
          rel="stylesheet"
        />
        <script src="/minga.js" type="text/javascript" />
      </Head>
      <Provider
        theme={{
          font: "'Inconsolata', monospace",
          breakpoints: ['@media(min-width: 540px)'],
          margins: {
            mobx: '30px',
            des: '90px',
            moby: '60px',
          },
        }}
      >
        <Header />
        <Fold>
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
          <footer className="colophon">
            <Colophon />
          </footer>
        </Fold>
      </Provider>
    </>
  );
}

export default App;
