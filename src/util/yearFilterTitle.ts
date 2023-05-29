const yearFilterTitle = (value: string | string[] | undefined, forms: string[]) => {
    if (!value) return forms[0]
    if (value === '1980') return `${forms[1]} 1980`
    if (value && String(value).match('-')) return value

    return `${value} ${forms[2]}`
}

export default yearFilterTitle
