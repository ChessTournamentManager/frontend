import axios from 'axios'

const BASE_URL = 'http://localhost:8080/tournament'

export const fetchTournaments = async () => {
    let data
    try {
        data = (await axios.get(`${BASE_URL}`)).data
    }
    catch (error) {
        console.log(error);
    }
  return data
}

export const createTournament = async (tournament) => {
    let data
    try {
        data = (await axios.post(`${BASE_URL}`, tournament)).data
    }
    catch (error) {
        console.log(error);
    }
  return data
}