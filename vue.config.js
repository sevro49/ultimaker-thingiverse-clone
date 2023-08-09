const Dotenv = require("dotenv-webpack");

module.exports = {
    transpileDependencies: true,
    configureWebpack: {
        plugins: [new Dotenv()],
    },
};
