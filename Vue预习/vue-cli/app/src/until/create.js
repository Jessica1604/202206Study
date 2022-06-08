import Vue from 'vue'
import notice from '@/components/notice.vue'

// function create(component, props) {

//     const vm = new Vue({
//         render: h => h(component,{props})
//     }).$mount() 

//     document.body.appendChild(vm.$el)

//     const comp = vm.$children[0]
    
//     comp.remove = function() {
//         document.body.removeChild(vm.$children[0])
//         vm.$destroy()
//     }

//     return comp
// }

// export default create

function create(component, props) {
    const vueCtor = Vue.extend(component)
    const vm = new vueCtor({propsData: props}).$mount()
    // vm.$mount()
    console.log(vm.$el)
    document.body.appendChild(vm.$el)
    
    vm.remove = function() {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }
    
    return vm

}

export default {
    install(Vue) {
      Vue.prototype.$create = function(option) {
        return create(notice, option)
      }
    }
}