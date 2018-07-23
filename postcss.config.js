module.exports = {
    plugins: [
        require('precss')(),
        require("postcss-cssnext")({
            features: {
                rem: false
                    // customProperties: {
                    //     variables: require("./varibles.js")
                    // }
            },
            warnForDuplicates: false
        }),
        // require('cssnano')(),
    ]
}