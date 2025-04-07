import service from '@/utils/request.js'

const User = {
    onLogin: async function (req) {
        try {
            return await service.post('/user-service/v1/login', req)
        } catch (err) {
            console.error('登录失败：', err)
        }
    },

    onSendCode: async function (req) {
        try {
            return await service.post('/user-service/v1/send-verify-code', req)
        } catch (err) {
            console.error('发送验证码失败：', err)
        }
    },

    onGetInfo: async function (id) {
        try {
            return await service.get('/user-service/v1/user', {
                params: {
                    userId: id,
                },
            })
        } catch (err) {
            console.error('获取用户信息失败：', err)
        }
    },

    onUploadAvatar: async function (formData) {
        try {
            return await service.post('/user-service/v1/upload-avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        } catch (err) {
            console.error('上传头像失败：', err)
        }
    },

    onLogout: async function () {
        try {
            const res = await service.get('/user-service/logout')
            localStorage.removeItem('token')
            return res
        } catch (err) {
            console.error('退出登录失败：', err)
        }
    },
}

export default User
