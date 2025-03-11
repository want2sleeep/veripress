// src/mock/user.js
export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: () => ({
            code: 0,
            message: 'success',
            data: {
                token: 'Token',
                username: 'hahaha',
            },
        }),
    },
]

