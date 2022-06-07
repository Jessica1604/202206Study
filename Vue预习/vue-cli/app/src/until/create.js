import Vue from 'vue'

function create(component, props) {

    const vm = new Vue({
        render: h => h(component,{props})
    }).$mount() 

    document.body.appendChild(vm.$el)

    const comp = vm.$children[0]
    
    comp.remove = function() {
        document.body.removeChild(vm.$children[0])
        vm.$destroy()
    }

    return comp
}

export default create