<template>
    <di>
        <h1>Tournaments</h1>
        <ul>
            <li v-for="tournament of tournaments" :key="tournament.id">
                {{ tournament.name }}
            </li>
        </ul>
    </di>
</template>
  
<script>
import axios from "axios";

export default {
    name: "TournamentList",
    data() {
      return {
        tournaments: []
      };
    },
    async created() {
      this.getTournaments();
    },
    methods: {
      async getTournaments() {
        try {
          const res = await axios.get(`http://localhost:8080/tournament`);  
          this.tournaments = res.data;
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