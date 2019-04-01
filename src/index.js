import Helmet from 'helmet'; // eslint-disable-line
import Header from './components/Header';
import Colophon from './colophon.mdx';
import Fold from './components/Fold';

function App({ children }) {
  return (
    <>
      <Helmet>
        <title>rajatsharma.dev</title>
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
