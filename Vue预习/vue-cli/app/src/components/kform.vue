<template>
    <div>
     <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'form',
        provide() {
            return {
                form: this
            }
        },
        props: {
            model: {
                type: Object,
                default(){
                    return {}
                },
                required: true
            },
            rules: {
                type: Object,
                default(){
                    return {}
                },
                required: false
            }
        }, 
        data() {
            return {
        
            }
        },
        methods: {
            validateAll(cb) {
                  let newValidate = this.$children.filter((itemChild) => {
                      return itemChild.label
                  })
                  let task = newValidate.map(item => {
                      console.log(item)
                      item.updateValid()
                  })
                  console.log(newValidate)
                  console.log(task)
                  Promise.all(task).then(() => {
                     cb(true)
                  }).catch(()=> {
                      cb(false)
                  })

            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>