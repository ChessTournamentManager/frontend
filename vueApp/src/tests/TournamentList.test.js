import TournamentList from '@/components/TournamentList.vue'
import { TournamentData } from '@/helpers/TournamentHelper';
import * as exports from '@/services/TournamentService.js';
import { mount } from '@vue/test-utils'

const mockTournamentList = TournamentData

describe('Tournament List', () => {

    test('loads tournaments onto the page', async () => {
        vi.spyOn(exports, 'fetchTournaments', 'get').mockReturnValue(mockTournamentList)

        const wrapper = mount(TournamentList, {
            data() {
              return {
                tournaments: [mockTournamentList[0], mockTournamentList[1]]
              }
            }
        })

        const ul = wrapper.find('ul')

        expect(ul.text()).toContain(mockTournamentList[0].name)
        expect(ul.text()).toContain(mockTournamentList[1].name)
    })
})