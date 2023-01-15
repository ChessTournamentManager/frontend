import axios from 'axios'
import { fetchTournaments, createTournament } from '@/services/TournamentService';
import { TournamentData } from '@/helpers/TournamentHelper';

const mockTournamentList = TournamentData

vi.mock('axios')

describe('Tournament Service', () => {
    beforeEach(() => {
        axios.get.mockReset()
    })
  
    describe('fetchTournaments', () => {
        test('makes a GET request to fetch tournaments', async () => {
            
            axios.get.mockResolvedValue({
                data: mockTournamentList,
            })

            const tournaments = await fetchTournaments()

            expect(axios.get).toHaveBeenCalledTimes(1)
            expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/tournament')

            expect(tournaments).toStrictEqual(mockTournamentList);
        })
    })
  
    describe('createTournament', () => {
        test('makes a POST request to create a tournament', async () => {

            axios.post.mockResolvedValue({
                data: mockTournamentList[1],
            })

            const tournament = await createTournament(mockTournamentList[1])

            expect(axios.post).toHaveBeenCalledTimes(1)
            expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/tournament', mockTournamentList[1])

            expect(tournament).toStrictEqual(mockTournamentList[1]);
        })
    })
})