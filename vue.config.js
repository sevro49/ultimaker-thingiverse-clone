const { defineConfig } = require("@vue/cli-service");
const Dotenv = require("dotenv-webpack");

// module.exports = defineConfig({
//     transpileDependencies: true,
// });

module.exports = {
  configureWebpack: {
    plugins: [
      new Dotenv(),
      new defineConfig(),
    ],
  },


};
