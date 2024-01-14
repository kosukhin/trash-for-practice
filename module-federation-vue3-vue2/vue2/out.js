/* config.module.rule('css') */
{
  test: /\.css$/,
  oneOf: [
    /* config.module.rule('css').oneOf('vue-modules') */
    {
      resourceQuery: /module/,
      use: [
        /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: true
          }
        },
        /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2,
            modules: {
              localIdentName: '[name]_[local]_[hash:base64:5]',
              auto: () => true
            }
          }
        },
        /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/postcss-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            postcssOptions: {
              plugins: [
                function () { /* omitted long function */ }
              ]
            }
          }
        }
      ]
    },
    /* config.module.rule('css').oneOf('vue') */
    {
      resourceQuery: /\?vue/,
      use: [
        /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: true
          }
        },
        /* config.module.rule('css').oneOf('vue').use('css-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2
          }
        },
        /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/postcss-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            postcssOptions: {
              plugins: [
                function () { /* omitted long function */ }
              ]
            }
          }
        }
      ]
    },
    /* config.module.rule('css').oneOf('normal-modules') */
    {
      test: /\.module\.\w+$/,
      use: [
        /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: true
          }
        },
        /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2
          }
        },
        /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/postcss-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            postcssOptions: {
              plugins: [
                function () { /* omitted long function */ }
              ]
            }
          }
        }
      ]
    },
    /* config.module.rule('css').oneOf('normal') */
    {
      use: [
        /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/vue-style-loader/index.js',
          options: {
            sourceMap: false,
            shadowMode: true
          }
        },
        /* config.module.rule('css').oneOf('normal').use('css-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/css-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            importLoaders: 2
          }
        },
        /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
        {
          loader: '/mnt/346e4530-4258-48ea-ba25-c01c1123999e/code/trash-for-practice/module-federation-vue3-vue2/vue2/node_modules/postcss-loader/dist/cjs.js',
          options: {
            sourceMap: false,
            postcssOptions: {
              plugins: [
                function () { /* omitted long function */ }
              ]
            }
          }
        }
      ]
    }
  ]
}
