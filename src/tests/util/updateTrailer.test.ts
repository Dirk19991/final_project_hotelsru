import { IAdminPanelMovie } from '@/types/Component/IMovie'
import updateTrailer from '@/util/updateTrailer'

it('returns correct movie object', () => {
    expect(updateTrailer({ trailer: 'invalid', description: 'mock' } as IAdminPanelMovie)).toEqual({
        trailer: 'invalid',
        description: 'mock',
    })

    expect(
        updateTrailer({
            trailer: 'https://www.youtube.com/watch?v=R8xepj9wpi4',
            description: 'mock',
        } as IAdminPanelMovie)
    ).toEqual({
        trailer: 'https://www.youtube.com/embed/R8xepj9wpi4',
        description: 'mock',
    })

    expect(
        updateTrailer({
            trailer: 'https://www.youtu.be/watch?v=nI9uUv6AdoY',
            description: 'mock',
        } as IAdminPanelMovie)
    ).toEqual({
        trailer: 'https://www.youtube.com/embed/nI9uUv6AdoY',
        description: 'mock',
    })

    expect(
        updateTrailer({
            trailer: '"https://www.youtube.com/embed/nI9uUv6AdoY"',
            description: 'mock',
        } as IAdminPanelMovie)
    ).toEqual({
        trailer: '"https://www.youtube.com/embed/nI9uUv6AdoY"',
        description: 'mock',
    })
})
