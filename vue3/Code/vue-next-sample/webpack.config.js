// module.exports={

// }
const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')


//引入，未来写代码有智能提示
// import  webpack from 'webpack'

/** 
*@type {webpack.Configuration}
*/
const config={
  entry:'./src/main.js',
  output:{
    filename:'bundle.js',
    path:path.join(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.vue$/,
        use:'vue-loader'
      },
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html'
    }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
} 

module.exports=config