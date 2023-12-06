module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-flow',
        'module:metro-react-native-babel-preset'
    ],
    plugins: [
        'babel-plugin-styled-components',
        '@babel/plugin-proposal-class-properties'
    ]
};
