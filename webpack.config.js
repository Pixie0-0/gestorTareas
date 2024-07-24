const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/,    //Regex (expresiones regulares) para identificar archivos css
                use: ['style-loader', 'css-loader'],    //Loaders para procesar archivos css
            },
            {
                test: /\.js$/,   //Regex para identificar archivos js
                exclude: /node_modules/,   //Excluir carpeta node_modules
                use: {
                    loader: 'babel-loader',   //Loader para convertir JS moder al JS compatible a más navegadores
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map',  //Genera source maps para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta del que correrá el servidor
        compress: true, //Habilitar compresión gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};