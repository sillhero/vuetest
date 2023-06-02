const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true, 
    lintOnSave:false // ======> 追加这句话，用于关闭语法检查。
})