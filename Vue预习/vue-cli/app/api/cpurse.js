// 模拟异步数据获取
// import axios from 'axios'

// export function getCourList() {
//     return axios.get('/api/courses').then(res => res.data)
// }
// export function getCourList() {
//     return new Promise(resolve => {
//         setTimeout(() =>{
//             return resolve(['123', '456'])
//         }, 2000)
//     })
// }
const express = require('express')
const app = express()

app.get('/api/courses', (req, res) => {
   res.json([{ name: 'web', price: '123'},{name: 'java', price: '1200'}])
})

app.listen(3000)