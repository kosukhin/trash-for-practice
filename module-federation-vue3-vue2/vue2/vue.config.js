const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

process.env.VUE_CLI_CSS_SHADOW_MODE = true;

function enableShadowCss(config) {
  const configs = [
    config.module.rule('vue').use('vue-loader'),
    config.module.rule('css').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('css').oneOf('vue').use('vue-style-loader'),
    config.module.rule('css').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('css').oneOf('normal').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('vue').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('postcss').oneOf('normal').use('vue-style-loader'),
    config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('scss').oneOf('vue').use('vue-style-loader'),
    config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('scss').oneOf('normal').use('vue-style-loader'),
    config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('sass').oneOf('vue').use('vue-style-loader'),
    config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('sass').oneOf('normal').use('vue-style-loader'),
    config.module.rule('less').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('less').oneOf('vue').use('vue-style-loader'),
    config.module.rule('less').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('less').oneOf('normal').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('vue').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('stylus').oneOf('normal').use('vue-style-loader'),
  ];
  configs.forEach((c) => c.tap((options) => {
    if (options) {
      options.shadowMode = true;
    }
    return options;
  }));
}

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.ts',
    },
  },
  publicPath: 'auto',
  chainWebpack(config) {
    enableShadowCss(config);
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'vue2',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'vue2App' },
        exposes: {
          './vue2': './node_modules/vue/dist/vue',
          './HelloWorld': './src/components/HelloWorld.vue',
          './test.css': './src/components/test.css',
        },
      }),
    ],
  },
  transpileDependencies: true,
});
