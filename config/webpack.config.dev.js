const webpack = require('webpack')
const path = require('path')
const join = path.join

// Paths
const rootPath = join(__dirname, './..')
const srcPath = join(rootPath, 'src')
const buildPath = join(rootPath, 'build')
const nodeModulesPath = join(rootPath, 'node_modules')
const reactToolboxPath = join(nodeModulesPath, 'react-toolbox')

// Webpack plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: srcPath,
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(srcPath, '/index.js')
  ],
  output: {
    path: buildPath,
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  devServer: {
    contentBase: 'public',
    hot: true,
    port: 3000,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true
    }
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [srcPath],
        exclude: [nodeModulesPath],
        loaders: ['react-hot', 'babel']
      }, {
        test: /\.css$/,
        include: [srcPath, reactToolboxPath],
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      }
    ]
  },
  postcss (webpackInstance) {
    return [
      require('postcss-import')({
        addDependencyTo: webpackInstance,
        root: rootPath,
        path: [
          path.join(reactToolboxPath)
        ]
      }),
      require('postcss-cssnext')({
        features: {
          customProperties: {
            variables: {
              'color-primary': 'var(--palette-teal-500)',
              'color-primary-dark': 'var(--palette-teal-700)',
              'color-primary-light': 'var(--palette-teal-500)',
              'color-accent': 'var(--palette-amber-a200)',
              'color-accent-dark': 'var(--palette-amber-700)',
              'color-primary-contrast': 'var(--color-dark-contrast)',
              'color-accent-contrast': 'var(--color-dark-contrast)'
            }
          }
        }
      }),
      require('precss')({})
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css', { allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
