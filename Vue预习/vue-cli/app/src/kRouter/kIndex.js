let Vue 

class kvRouter {
    constructor(option){

        this.$options = option

        // Vue.util.defineReactive(this, 'current', '/')
        // Vue.set(this, 'current', '/')
        this.app = new Vue({
            data() {
                return {
                    current: '/'
                }
            },
        })

        window.onhashchange = function() {
            this.app.current = window.location.hash.slice(1)
            // console.log(this.current)
        }

        window.onload = function() {
            this.app.current = window.location.hash.slice(1)
        }

        this.routerMap = {}
        option.routes.forEach(route => {
            this.routerMap[route.path] = route.component
        });

        console.log(this.routerMap)

    }

}

kvRouter.install = function(_vue) {
   Vue = _vue

   Vue.mixin({
       beforeCreate () {
        //    console.log(this.$options)
           if (this.$options.router) {
               Vue.prototype.$router = this.$options.router
           }
       },
       
   })

   Vue.component('router-link',{
       props: {
           to: {
               type: String,
               required: true
           },
       },
    render(h){
        return h('a', {attrs: {href: '#'+this.to}}, this.$slots.default)
    } ,   // 注册的全局组件router-link
    created () {
        // console.log(this.$slots.default[0].text);
        // console.log(this.to)
    },
   })

   Vue.component('router-view', {
       render(h) {

        //    const {routerMap} = this.$router
        // console.log(this.routerMap)
        // console.log(this.current)
        // console.log(this.routerMap[this.current])
           const {routerMap, app} = this.$router
           console.log(routerMap)
           console.log(app.current)
           let component = routerMap[app.current] || null
          
           return h(component)
        //    return h('div', 'router-view')
       }
   }) // 注册的全局组件router-view
}

export default kvRouter