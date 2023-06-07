module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-custom-properties')(),
        require('postcss-custom-media')(),
        require('postcss-nested')(),
        require('postcss-preset-env')(),
        require('autoprefixer')(),
    ]
}
