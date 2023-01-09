<template>
    <NavigationBar />
    <h2>Main Page</h2>
    <TournamentList/>
</template>

<script>
    import NavigationBar from "@/components/NavigationBar.vue";
    import TournamentList from "@/components/TournamentList.vue";

    export default {
        components: { 
            NavigationBar,
            TournamentList
        }
    };
</script>