const path = require('path');

module.exports = {
    entry: './src/index.js', // Replace './src/index.js' with the path to your app's entry file
    output: {
        path: path.resolve(__dirname, 'dist'), // Replace 'dist' with the desired output folder path
        filename: 'bundle.js',
        libraryTarget: "commonjs2",

    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: [
        {
            // Don't bundle react or react-dom
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "React",
                root: "React",
            },
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "ReactDOM",
                root: "ReactDOM",
            },
            "@mui/material": {
                root: "MaterialUI",
                commonjs: "@mui/material",
                commonjs2: "@mui/material",
                amd: "@mui/material",
            },
        },
        /@mui\/.*/,

        "@mui/material",
        "@mui/icons-material",
        /@mui\/material\/*./,
        /@mui\/icons-material\/*./,
        externalMaterialUI,
    ],
};
function externalMaterialUI(_, module, callback) {
    var isMaterialUIComponent = /^@mui\/material\/([^/]+)$/;
    var match = isMaterialUIComponent.exec(module);
    if (match !== null) {
        var component = match[1];
        return callback(null, `window["material-ui"].${component}`);
    }
    callback();
}