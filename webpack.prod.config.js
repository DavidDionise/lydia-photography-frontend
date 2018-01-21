const webpack = require('webpack');
const { resolve } = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry : [
	  './index.js',
	],
	output : {
		path : resolve(__dirname, 'dist'),
		filename : 'bundle.js',
		publicPath : '/',
	},
	context: resolve(__dirname, 'src'),
  devtool: 'inline-source-map',

	module : {
    rules: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader?modules', ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ],
	},
	plugins : [
    new UglifyJSPlugin(),
		new webpack.DefinePlugin({
      NODE_ENV: `'production'`,
			API_URL: `'http://174.138.32.26:3000'`,
			INSTAGRAM_URL: `'https://www.instagram.com/lydia.cournoyer/?hl=en'`
    })
	],
};

module.exports = config;
