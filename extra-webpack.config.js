module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#673ab7',
            },
            javascriptEnabled: true,
          },
        },
      },
    ],
  },
};
