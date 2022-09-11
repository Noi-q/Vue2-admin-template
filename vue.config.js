module.exports = {
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target : 'http://loacalhost:9900',
        changeOrigin:true,
        pathRewrite: {'^/api': ''}
      }
    }
  }
}