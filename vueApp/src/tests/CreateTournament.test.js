import CreateTournament from '@/components/CreateTournament.vue'
import { mount } from '@vue/test-utils'

describe('Create Tournament', () => {

    test('creates a tournament', async () => {
        const createSpy = vi.spyOn(CreateTournament.methods, 'createTournament')

        const wrapper = mount(CreateTournament, {
            data() {
                return {
                    name: 'test name',
                    maxRounds: '5',
                    timePerPlayer: '20'
                }
            }
        })

        await wrapper.find('button').trigger('click')

        expect(createSpy).toHaveBeenCalledTimes(1)
        expect(createSpy).toHaveBeenCalledWith('test name', '5', '20')
    })
})