const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const devConfig = require('./config/webpack.config.dev') 
const prodConfig = require('./config/webpack.config.prod')

const commonConfig = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader'
                  },
                  {
                    loader: 'ts-loader',
                  },
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = () => {
    console.info(`\x1b[34mNODE_ENV: ${process.env.NODE_ENV} \x1b[0m`)

    switch (process.env.NODE_ENV) {
        case 'development':
            return merge(commonConfig, devConfig);
        case 'production':
            return merge(commonConfig, prodConfig);
        default:
            throw new Error('No matching configuration was found!');
    }
}