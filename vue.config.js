const { defineConfig } = require( '@vue/cli-service' )
const ElementPlus = require("unplugin-element-plus/webpack").default;

module.exports = defineConfig( {
    transpileDependencies: true,
    css: {
        loaderOptions: {
            scss: {
                // prependData:`@import "./src/styles/main.scss;`
                additionalData: `@import "./src/styles/main.scss";`,
            },
        },
    },
    configureWebpack: {
        plugins: [ ElementPlus() ],
    },
} )
