<template>
  <h2>Welcome to</h2>
  <h1>Chess Tournament Manager</h1>
  <br/>
  <div>
    <p>Click here to start right away</p>
    <button @click="login">Create Tournament</button>
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';
  
  export default {
    setup() {
      const { loginWithRedirect } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        }
      };
    }
  };
</script>