import Mock from "mockjs"
import user from "./user"

const mocks = [...user]

mocks.forEach(mock => {
    Mock.mock(
        new RegExp(mock.url + ".*"),
        mock.response
    )
})
