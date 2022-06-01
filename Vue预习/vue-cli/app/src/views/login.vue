<template>
    <div>
       <button @click="login" v-if="!isLogin">登录</button>
       <button @click="logOut" v-else>注销</button>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        methods: {
            login() {
                // window.isLogin = true;
                // console.log(this.$router)
                // this.$store.commit('login')
                // this.$store.dispatch('user/login', 'admin').then(() => {
                //     this.$router.push(this.$route.query.redirect)
                // }).catch(() => {
                //     alert('用户名错误，请重新输入')
                // })
                this['user/login']('admin').then(() => {
                    this.$router.push(this.$route.query.redirect)
                }).catch(() => {
                    alert('用户名错误，请重新输入')
                })

            },
            logOut() {
                this.$store.commit('user/logOut')
                // window.isLogin = false;
                this.$router.push('/')
            },
            ...mapActions(['user/login', 'user/logOut'])
        },
        computed: {
            // isLogin() {
            //     // return   this.$store.state.user.isLogin
            //     return  ...mapState('user', 'isLogin')
            // }
            ...mapState('user', ['isLogin'])
        },
        
    }
</script>

<style lang="scss" scoped>

</style>