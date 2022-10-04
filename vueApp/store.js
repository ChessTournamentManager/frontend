import { createApp, VueElement } from 'vue'
import { createStore } from 'vuex'

Vue.use(Vuex)

// Create a new store instance.
const store = createStore({
    state: {
        userIsAuthorized:true,
    },
    mutations: {

    },
    actions: {

    }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)