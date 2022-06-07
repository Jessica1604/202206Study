<template>
    <div>
        <h3>detail page</h3>
        <div>{{$route.params.name}}</div>
        <Kform :model="userInfo" :rules="rules" ref="loginForm">
            <Kformitem prop="userName" label="用户名:">
                <Kinput placeholder="请输入用户名" v-model="userInfo.userName" :type="'text'"></Kinput>
            </Kformitem>
            <Kformitem prop="passWorld" label="密码:">
                <Kinput placeholder="请输入用户名" :type="'password'" v-model="userInfo.passWorld"></Kinput>
            </Kformitem>
            <Kformitem>
                <button @click="submit">提交</button>
            </Kformitem>
        </Kform>

    </div>
</template>

<script>
    import Kinput from '@/components/kinput'
    import Kformitem from '@/components/Kformitem'
    import Kform from '@/components/kform'
    import notice from '@/components/notice'

    export default {
        name: 'detail',
        components: {
           Kinput,
           Kformitem,
           Kform
        },
        data() {
            return {
                userInfo: {
                    userName: 'tom',
                    passWorld: ''
                },
                rules:{
                    userName: {required: true, message: '请输入用户名'},
                    passWorld: {required:true, message: '请输入密码'}
                }
            }
        },
        methods: {
            submit() {
                this.$refs['loginForm'].validateAll(valid => {
                    if (valid) {
                        console.log('校验成功')
                        this.$create(notice, {}).show()
                    } else {
                        console.log('校验失败')
                    }
                })
            }
        },
    }
</script>

<style lang="less" scoped>

</style>