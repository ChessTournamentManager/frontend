<template>
    <button class="button_sign-up" @click="handleSignUp">Sign Up</button>
</template>
  
<script>
  export default {
    methods: {
      handleSignUp() {
        this.$auth0.loginWithRedirect({
          appState: {
            target: "/profile",
          },
          screen_hint: "signup",
        });
      },
    },
  };
</script>