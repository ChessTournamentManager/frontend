<template>
  <NavigationBar />
  <h2>Welcome to</h2>
  <h1>Chess Tournament Manager</h1>
  <br/>
  <div>
    <p>Click here to start right away</p>
    <LoginButton />
  </div>
</template>

<script>
    import LoginButton from "@/components/buttons/LoginButton.vue";
    import NavigationBar from "@/components/NavigationBar.vue";

    export default {
        components: { LoginButton, NavigationBar }
    };
</script>