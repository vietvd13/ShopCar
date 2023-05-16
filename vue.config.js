module.exports = {
    configureWebpack: {
        performance: {
            hints: process.env.NODE_ENV === "prod" ? true : false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }
}