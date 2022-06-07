<template>
    <div>
     <label v-if="label">{{label}}</label>   
     <slot></slot>
     <p v-if="error" class="red">{{error}}</p>
    </div>
</template>

<script>
   import Schema from 'async-validator'
    export default {
        name: 'kformitem',
        componentName: 'kformitem',
        inject: ['form'],
        props: {
            label: {
                type: String,
                default: '',
            },
            prop: {
                type:String,
                default: ''
            }
        },
        data() {
            return {
                error: ''
            }
        },
        mounted () {
            console.log(this.form);
            this.$on('valid', () => {
                this.updateValid()
            })
        },
        methods: {
            updateValid() {
                // 规则
                const rules = this.form.rules[this.prop]
                // 获得的值
                const value = {
                    [this.prop]: this.form.model[this.prop]
                }
                // 校验描述对象
                const des = {
                    [this.prop]: rules
                }
                const validator = new Schema(des)
                return validator.validate(value, (errors) => {
                  if (errors){
                      this.error = rules['message']
                    //   return false
                    // this.error = rules
                  } else {
                      this.error = ''
                    //   return true
                  }
                })
                
            }
        },
        
    }
</script>

<style lang="less" scoped>
.red{
    font-size:12px;
    color: red;
}

</style>