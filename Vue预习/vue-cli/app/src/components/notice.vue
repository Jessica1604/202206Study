<template>
    <div>
       <div class="messagebox" v-if="isShow">
           <div class="header">X</div>
           <div>Let me to know i,m not alone</div>
       </div>
    </div>
</template>

<script>
    export default {
        name: 'notice',
        data() {
            return {
                isShow: false
            }
        },
        // props: {
        //     title: {
        //         type: Number,
        //         default: 
        //     },
        // },
        methods: {
            show() {
               this.isShow = true
               setTimeout(() => {
                   this.isShow = false
               }, 2000) 
            //    this.hide()
                
            },
            hide() {
                // this.isShow = false;
                this.remove()
            }
        },

    }
</script>

<style lang="less" scoped>
.messagebox{
    width: 300px;
    height: 200px;
    border: 1px solid #ccc;
    margin-top: 30px;
    margin: 0 auto;
    background: #fff;

}

</style>