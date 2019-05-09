const withTypesscript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')

module.exports = withTypesscript(
    withCss({
        cssModules: true,
        cssLoaderOptions: {
            camelCase: true
        },
        target: 'serverless',
    }),
)

