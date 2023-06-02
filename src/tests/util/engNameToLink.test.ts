import engNameToLink from '@/util/engNameToLink'

it('returns camelcase', () => {
    expect(engNameToLink('Short film')).toEqual('short-film')
    expect(engNameToLink('Comedy')).toEqual('comedy')
})
