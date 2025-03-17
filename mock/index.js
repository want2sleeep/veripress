import Mock from "mockjs"

Mock.mock('http://localhost:3000/testmock', 'get', {
    code: 200,
    msg: 'mock test'
})

// Mock.mock('http://localhost:3000/api/user/login', 'post', {
//     code: 0,
//     message: 'success',
//     data: {
//         token: 'Token',
//         username: 'hahaha',
//     },
// })
