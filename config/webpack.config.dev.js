const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        hot: true,
        static: path.join(__dirname, 'build'),
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
}