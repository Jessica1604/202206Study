<template>
    <div>
      <input :type="type" :value="value" @input="onInput" v-bind="$attrs">
    </div>
</template>

<script>
    import emmiter from '../until/emmiter.js'
    export default {
        inheritAttrs: false,
        mixins: [ emmiter ],
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: {
                type:String,
                default: ''
            }
        },
        mounted () {
            console.log(this.$attrs);
        },
        methods: {
            onInput(e) {
                this.$emit('input', e.target.value)
                // this.$parent.$emit('valid')
                this.dispatch('kformitem', 'valid')
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>