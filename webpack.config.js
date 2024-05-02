const path = require('path');

module.exports = {
  entry: {
    // JS
    responsive_index: './static/js/responsive/responsive-index/responsive_index.js',
    components_index: './static/js/lit-element/element-index/components_index.js',
    modules: './static/js/lit-element/element-index/modules.js',
    // CSS
    styles_atoms: './static/css/styles-index/atoms.css', // Agrega la entrada para tu archivo CSS
    styles_atoms: './static/css/styles-index/atoms.css', // Agrega la entrada para tu archivo CSS
    styles_molecules: './static/css/styles-index/molecules.css', // Agrega la entrada para tu archivo CSS
    styles_organisms: './static/css/styles-index/organisms.css', // Agrega la entrada para tu archivo CSS
    styles_templates: './static/css/styles-index/templates.css', // Agrega la entrada para tu archivo CSS
  },

  module: {
    rules: [
      {
        test: /\.css$/, // Regla para archivos CSS
        use: ['style-loader', 'css-loader'] // Usa style-loader para inyectar los estilos y css-loader para interpretar los archivos CSS
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/, // Regla para archivos de fuentes
        use: [
          {
            loader: 'file-loader', // Usa file-loader para manejar los archivos de fuentes
            options: {
              name: '[name].[ext]', // Mantén el nombre original de los archivos de fuentes
              outputPath: 'fonts/' // Carpeta de salida para las fuentes compiladas
            }
          }
        ]
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'), // Ruta de salida de los archivos compilados
    filename: '[name].js', // Archivos JS
    assetModuleFilename: '[name][ext]', // Archivos no JS (CSS, fuentes, etc.)
  },

  mode: 'development' // Establecer el modo de desarrollo
};
