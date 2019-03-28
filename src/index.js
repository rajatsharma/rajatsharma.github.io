import Helmet from 'helmet.regime';

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
    </>
  );
}

export default App;
