<template>
    <button class="button_logout" @click="handleLogout">Log Out</button>
</template>
  
<script>
  export default {
    methods: {
      handleLogout() {
        this.$auth0.logout({
          returnTo: window.location.origin,
        });
      },
    },
  };
</script>