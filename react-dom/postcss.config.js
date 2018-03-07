module.exports = {
    plugins: [
        require('precss')(),
        require("postcss-cssnext")({
            features: {
                rem: false
                    // customProperties: {
                    //     variables: require("./varibles.js")
                    // }
            }
        }),
        // require('autoprefixer')(),
    ]
}