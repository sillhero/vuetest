const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true, 
    lintOnSave:false, // ======> 追加这句话，用于关闭语法检查。
    // 配置代理
    // 一次性配置多个代理
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                pathRewrite: {'^/api1' : ''},
                changeOrigin: true,
            },
            '/api2': {
                target: 'http://localhost:5001',
                pathRewrite: {'^/api2' : ''},
                changeOrigin: true,
            },
            '/api3': {
                target: 'https://news.baidu.com',
                pathRewrite: {'^/api3' : ''},
                changeOrigin: true
            }
        }
    }
})