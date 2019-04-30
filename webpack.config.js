const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		filename: '[name].[contenthash].bundle.js'
	},
	mode: 'development',
	resolve: {
		modules: [
			path.resolve('./src'),
			path.resolve('./node_modules')
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.ProvidePlugin({
			PIXI: 'pixi.js'
		}),
		new HtmlWebpackPlugin({
			title: 'Javamon',
			chunks: ['app']
		})
	]
};