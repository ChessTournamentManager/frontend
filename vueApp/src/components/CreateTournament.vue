<template>
    <p>Create a new tournament:</p>
    <input v-model="name" placeholder="name"/>
    <input v-model="maxRounds" placeholder="max rounds"/>
    <input v-model="timePerPlayer" placeholder="time per player"/>
    <button class="button__login" @click="createTournament(name, maxRounds, timePerPlayer)">Create</button>
</template>
  
<script>  
import {  v4 as uuidv4 } from 'uuid';
import { createTournament } from '@/services/TournamentService';
  
export default {
    name: "TournamentList",
    data() {
      return {
        hostId: uuidv4(),
        name: '',
        status: 'PLANNED',
        startTime: '2025-06-11T16:00:00.000Z',
        maxRounds: '',
        timePerPlayer: ''
      }
    },
    methods: {
        async createTournament(name, maxRounds, timePerPlayer) {
            const tournament = {
                hostId: this.hostId,
                name: name,
                status: this.status,
                startTime: this.startTime,
                maxRounds: maxRounds,
                timePerPlayer: timePerPlayer
            }

            await createTournament(tournament)
            .then(function (response) {
                window.location.reload()
            })
        }
    }
};

</script>