<template>
    <p>Create a new tournament:</p>
    <input v-model="tName" placeholder="name"/>
    <input v-model="tMaxRounds" placeholder="max rounds"/>
    <input v-model="tTimePerPlayer" placeholder="time per player"/>
    <button class="button__login" @click="createTournament(tName, tMaxRounds, tTimePerPlayer)">Create</button>
</template>
  
<script>  

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
  
export default {
    name: "TournamentList",
    methods: {
        createTournament(name, maxRounds, timePerPlayer) {
            axios.post(`http://localhost:8080/tournament`, {
                hostId: uuidv4(),
                name: name,
                status: 'PLANNED',
                startTime: '2025-06-11T16:00:00.000Z',
                maxRounds: maxRounds,
                timePerPlayer: timePerPlayer
            })
            .then(function (response) {
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
};

</script>