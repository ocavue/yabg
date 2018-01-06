'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const fs = require('fs')
const marked = require('marked')
const process = require('process')

function resolve (dir) {
  return path.join(__dirname, dir)
}

function getHtmlWebpackPluginConfs () {
  let mdDir = path.resolve(__dirname, './post')
  let postsInfoPath = path.resolve(__dirname, './src/assets/posts_info.json')
  let mdPaths = glob.sync(mdDir + '/**/*.md')

  let confs = []
  let postsInfo = []

  for (let [index, mdPath] of mdPaths.entries()) {
    let rel_md_path = path.relative(mdDir, mdPath)
    let rel_html_path = path.join(path.parse(rel_md_path).dir, path.parse(rel_md_path).name + '.html')

    // if md file is huge, this log may be useful
    process.stdout.write(`  0% building html ${index + 1}/${mdPaths.length} ${rel_html_path} \r`)

    postsInfo.push({
      title: path.parse(mdPath).name,
      href: 'dist/' + rel_html_path.replace('\\\\', '\\').replace('\\', '/')  // replace for windows
    })
    confs.push(
      new HtmlWebpackPlugin({
        hash: false,
        cache: true,
        title: path.parse(mdPath).name,
        content: marked(fs.readFileSync(mdPath, 'utf8')),
        template: './src/template.html',
        filename: rel_html_path,
        chunks: [],
      })
    )
  }

  fs.writeFileSync(postsInfoPath, JSON.stringify(postsInfo, null, 2))

  return confs
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  plugins: [].concat(getHtmlWebpackPluginConfs()),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              { loader: 'sass-loader', options: { includePaths: [resolve('node_modules')] } }
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
