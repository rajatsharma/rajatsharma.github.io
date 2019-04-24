const OfflinePlugin = require('offline-plugin');

module.exports = (config, options, webpack) => {
  if (options.target === 'web' && !options.dev) {
    config.plugins.push(
      new OfflinePlugin({
        externals: [
          'rajatsharma.pdf',
          '/',
          'https://fonts.googleapis.com/css?family=Inconsolata:400,700',
          'https://fonts.googleapis.com/css?family=Roboto:900',
        ],
        appShell: '/',
        publicPath: '/',
      }),
    );
  }
  config.plugins.push(
    new webpack.DefinePlugin({ __CLIENT__: options.target === 'web' }),
  );

  return config;
};
