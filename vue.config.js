const { defineConfig } = require("@vue/cli-service");
// const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,

  // scss 전역 설정
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },

  // webpack 관련 설정
  // configureWebpack: {
  //   resolve: {
  //     // alias 설정
  //     alias: {
  //       '@components': path.resolve(__dirname, 'src/components/'),
  //       '@utils': path.resolve(__dirname, 'src/utils/'),
  //     }
  //   }
  // }
});
