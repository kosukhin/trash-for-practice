const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'app_general',
        filename: 'remoteEntry.js',
        remotes: {
          vue2App: 'vue2App@/vue2/remoteEntry.js',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
