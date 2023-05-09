const engNameToLink = (engName: string) => {
    let name = engName

    if (name.match(/\s/)) {
        return name.toLowerCase().split(' ').join('-')
    }

    return (name = name.toLowerCase())
}

export default engNameToLink
