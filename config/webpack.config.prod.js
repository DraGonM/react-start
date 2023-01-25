const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    sourceMap: true
                }
            }),
        ],
        usedExports: true,
    }
}