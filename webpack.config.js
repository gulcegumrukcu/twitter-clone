const path = require('path');

module.exports = {
    entry: './src/main.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Added '@babel/preset-react' for JSX support
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Added rule for handling CSS files
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Added '.jsx' to the list of extensions
    },
};
