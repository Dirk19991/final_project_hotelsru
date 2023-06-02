import yearFilterTitle from '@/util/yearFilterTitle'

it('returns formatted date', () => {
    const yearTextForms = ['все годы', 'до', 'год']
    expect(yearFilterTitle('', yearTextForms)).toEqual('все годы')
    expect(yearFilterTitle('1980', yearTextForms)).toEqual('до 1980')
    expect(yearFilterTitle('2022', yearTextForms)).toEqual('2022 год')
})
