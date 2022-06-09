let Vue 

class kvRouter {
    constructor(option){

        this.$options = option

        // Vue.util.defineReactive(this, 'current', '/')
        Vue.set(this, 'current', '/')

        window.onhashchange = function() {
            this.current = window.location.hash.slice(1)
            console.log(this.current)
        }

        window.onload = function() {
            this.current = window.location.hash.slice(1)
        }

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
           let component = null
           console.log(this.$router)
           this.$router.$options.routes.forEach(element => {
               if (element.path == this.$router.current){
                component = element['component']
               }
           });
           console.log(component)
           return h(component)
        //    return h('div', 'router-view')
       }
   }) // 注册的全局组件router-view
}

export default kvRouter