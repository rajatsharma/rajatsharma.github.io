import Helmet from 'helmet'; // eslint-disable-line
import { Provider } from '@elementary/components';
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-138499061-1', 'auto');
ga('send', 'pageview');`,
          }}
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
        {children}
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
