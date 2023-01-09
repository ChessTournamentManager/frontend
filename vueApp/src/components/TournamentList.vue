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
      try {
        const res = await axios.get(`http://localhost:8080/tournament`);  
        console.log(res);
        console.log(res.data);
        this.tournaments = res.data;
        console.log(this.tournaments);
      } catch (e) {
        console.error(e);
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