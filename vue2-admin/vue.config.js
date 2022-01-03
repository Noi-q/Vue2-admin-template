module.exports = {
  pages: {
    index: {
      entry: 'src/main.js'
    }
  },
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target : 'http://loacalhost:5000',
        changeOrigin:true,
        pathRewrite: {'^/api': ''}
      }
    }
  }
}