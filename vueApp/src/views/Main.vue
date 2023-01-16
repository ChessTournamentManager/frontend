<template>
    <NavigationBar />
    <h2>Main Page</h2>
    <br/>
    <TournamentList :key="componentKey" />
    <br/>
    <br/>
    <CreateTournament @refreshTournaments="onRefreshTournaments"/>
</template>

<script>
    import CreateTournament from "@/components/CreateTournament.vue";
    import NavigationBar from "@/components/NavigationBar.vue";
    import TournamentList from "@/components/TournamentList.vue";
    import { ref } from 'vue';

    const componentKey = ref(0);
    const onRefreshTournaments = () => {
        componentKey.value += 1;
    };

    export default {
        components: {
            NavigationBar,
            TournamentList,
            CreateTournament
        },
        methods: {
            onRefreshTournaments() {
                //componentKey.value += 1;
                            
                this.$forceUpdate(); 
            }
        }
    };
</script>