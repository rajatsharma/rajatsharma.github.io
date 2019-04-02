import Helmet from 'helmet'; // eslint-disable-line
import Header from './components/Header';
import Colophon from './colophon.mdx';
import Fold from './components/Fold';

function App({ children }) {
  return (
    <>
      <Helmet>
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
      </Helmet>
      <Header />
      {children}
      <Fold>
        <footer className="standard-margin colophon">
          <Colophon />
        </footer>
      </Fold>
    </>
  );
}

export default App;
