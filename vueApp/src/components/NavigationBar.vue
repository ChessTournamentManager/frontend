<template>
    <div class="nav-bar_buttons">
        <template v-if="!isAuthenticated">
            <SignupButton />
            <LoginButton />
        </template>
        <template v-if="isAuthenticated">
            <LogoutButton />
        </template>
    </div>
</template>
  
<script>
    import LoginButton from "@/components/buttons/LoginButton.vue";
    import LogoutButton from "@/components/buttons/LogoutButton.vue";
    import SignupButton from "@/components/buttons/SignupButton.vue";

    export default {
        components: { LoginButton, LogoutButton, SignupButton },
        data() {
            return {
            isAuthenticated: this.$auth0.isAuthenticated,
            };
        },
    };
</script>