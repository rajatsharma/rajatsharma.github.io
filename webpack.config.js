const OfflinePlugin = require('offline-plugin');

module.exports = (config, options, webpack) => {
  if (options.target === 'web' && !options.dev) {
    config.plugins.push(
      new OfflinePlugin({
        externals: ['rajatsharma.pdf', '/'],
        appShell: '/',
        publicPath: '/',
      }),
    );
  }
  console.log(options);
  config.plugins.push(
    new webpack.DefinePlugin({ __CLIENT__: options.target === 'web' }),
  );

  return config;
};
