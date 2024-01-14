const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'auto',
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'async',
            reuseExistingChunk: true,
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'async',
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'vue2',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'vue2App' },
        exposes: {
          './vue2': './node_modules/vue/dist/vue',
          './HelloWorld': './src/components/HelloWorld.vue',
        },
      }),
    ],
  },
  transpileDependencies: true,
});
