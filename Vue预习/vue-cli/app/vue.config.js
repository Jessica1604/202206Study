const path = require('path')

function addStylceResource(rule) {
    rule.use('style-resource')
        .loader('style-resource-loader')
        .options({
            patterns: [
                path.resolve(__dirname,'./src/styles/imports.css')
            ]
        })

}

module.exports = {
    publicPath: process.env.BASE_URL === 'production'
    ? '/cart/'
    : '/',
    chainWebpack: config => {
       const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
       types.forEach(type => {
         addStylceResource(config.module.rule('scss').oneOf(type))
       })
    },
    // proxy: 'http://localhost:3000',
    devServer: {
        before(app) {
           app.get('/api/courses',(req,res)=> {
               res.json([{ name: 'web高级', price: '123'}, { name: 'web全栈', price: '456'}])
           })
        }

    }
}