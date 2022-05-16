       // 模拟异步数据获取
    export function getCourList() {
        return new Promise(resolve => {
          setTimeout(() =>{
              return resolve(['123', '456'])
          }, 2000)
        })
     }