export default{
    namespaced: true,
    state: {
        isLogin: false,
        userName: ''
      },
      mutations: {
        login(state, userName) {
          state.isLogin = true
          state.userName = userName
        },
        logOut(state) {
          state.isLogin = false
          state.userName = ''
        }
    
      },
      getters: {
          welcome: state => state.userName + ',欢迎回来' 
      },
      actions: {
        // 参数1 是上下文 commit dispath state  参数2 是传递的参数 异步获取数据
        login({commit}, count){
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if(count === 'admin') {
                commit('login', count)
                resolve()
              } else {
                reject()
              }
            }, 2000)
          })
        }
      },

}