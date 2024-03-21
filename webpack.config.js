module.exports = {
    entry: './src/index.js',
    mode: 'development',

    devServer: {
        static: './dist',
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //       title: 'Development',
    //     }),
    //  ],

    output: {
        filename: "index_bad.js"
    }
  };