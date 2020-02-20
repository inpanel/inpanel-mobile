// 管理信息
const SERVER_KEY = 'SERVER_KEY'
const STATE_KEY = 'STATE_KEY'

const set_status = function (status) {
    uni.setStorageSync(STATE_KEY, status)
}

const get_status = function () {
    return uni.getStorageSync(STATE_KEY) || false
}

const get_server = function () {
    let ret = ''
    ret = uni.getStorageSync(SERVER_KEY)
    if (!ret) {
        ret = '[]'
    }
    return JSON.parse(ret)
}

const set_server = function (server) {
    uni.setStorageSync(SERVER_KEY, JSON.stringify(server))
}

export default {
    set_status,
    get_status,
    get_server,
    set_server
}