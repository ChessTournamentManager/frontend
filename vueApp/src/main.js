import { createApp } from 'vue'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';
import './assets/main.css'

const app = createApp(App);

app.use(
  createAuth0({
    domain: "chess-tournament-manager.eu.auth0.com",
    client_id: "yJThGh7qZ9ZwBHTSkjhxqS7pNU87wyvs",
    redirect_uri: window.location.origin
  })
);

app.mount('#app')
