import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import App from './App.vue'
import router from '@/Router/index.js'
import './assets/main.css'

const app = createApp(App);

app.use(
  createAuth0({
    domain: "chess-tournament-manager.eu.auth0.com",
    client_id: "yJThGh7qZ9ZwBHTSkjhxqS7pNU87wyvs",
    redirect_uri: 'http://localhost:3000/'
  })
);

app.use(router)
app.mount('#app')