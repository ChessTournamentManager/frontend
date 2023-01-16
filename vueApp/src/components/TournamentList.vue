<template>
    <div>
        <h1>Tournaments</h1>
        <ul>
            <li v-for="tournament of tournaments" :key="tournament.id">
                {{ tournament.name }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import { fetchTournaments } from "@/services/TournamentService.js"

export default {
    name: "TournamentList",
    data() {
      return {
        tournaments: []
      };
    },
    async mounted() {
      await this.getTournaments();
    },
    methods: {
      async getTournaments() {
        try {
          this.tournaments = await fetchTournaments();
        } catch (e) {
          console.error(e);
        }
      }
    }
};
</script>
  
<style scoped>
  h1 {
    text-decoration: underline;
  }
  
  li {
    color: white;
  }
</style>