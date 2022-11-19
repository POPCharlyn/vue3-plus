const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css:{
    loaderOptions:{
      scss:{
        // prependData:`@import "./src/styles/main.scss;`
        additionalData:`@import "./src/styles/main.scss";`
      }
    }
  }
})
