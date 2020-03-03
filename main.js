import Vue from 'vue'
import App from './App'
import store from './store'
import * as components from './components'

Object.keys(components).forEach((component) => {
    Vue.component(component, components[component])
})

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
