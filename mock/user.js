import qs from 'qs'
import Mock from 'mockjs'

export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: (options) => {
            const data = qs.parse(options.body)
            console.log(data)
            if (data.email === 'admin') {
                return Mock.mock({
                    code: 0,
                    message: 'admin',
                })
            } else {
                return Mock.mock({
                    code: 0,
                    message: 'user',
                    data: {
                        asdadad: data
                    }
                })
            }
        },
    },
]
