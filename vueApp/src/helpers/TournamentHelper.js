import { parse } from 'uuid';

export const TournamentData = [
    { 
        id: parse('b46475b1-8ebd-40ec-a738-8e75324b6831'),
        hostId: parse('33bdf0cd-d74b-41dc-b6d0-a065a01b0589'),
        name: 'name1',
        status: 'PLANNED',
        startTime: '2025-06-11T16:00:00.000Z',
        finishTime: '2025-06-11T16:00:00.000Z',
        currentRound: 0,
        maxRounds: 5,
        timePerPlayer: 30,
        createdAt: '2022-06-11T16:00:00.000Z'
    },
    { 
        id: parse('d8eecbde-2cdc-44ed-942b-8eb2dd32d9eb'),
        hostId: parse('9613c364-4446-45d1-8e28-dd95fabd9476'),
        name: 'name2',
        status: 'FINISHED',
        startTime: '2022-06-18T16:00:00.000Z',
        finishTime: '2022-06-18T21:00:00.000Z',
        currentRound: 0,
        maxRounds: 3,
        timePerPlayer: 60,
        createdAt: '2022-05-11T16:00:00.000Z'
    }
]