import Vue from 'vue'
import Vuex from 'vuex'
import service from '../service/service.js'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        forcedLogin: true,
        hasLogin: false,
        server: {
            addr: '', // 服务器地址
            port: '', // 服务器端口
            token: '' // 服务器授权码
        }
    },
    mutations: {
        server_save(state, server) {
            state.server = {
                addr: server.addr,
                port: server.port,
                token: server.token
            }
            state.hasLogin = true
            service.set_status(true)
            service.set_server(state.server)
        },
        server_clear(state) {
            state.server = {
                addr: '',
                port: '',
                token: ''
            }
            state.hasLogin = false
            service.set_status(false)
            service.set_server(state.server)
        }
    }
})

export default store
