const engNameToLink = (engName: string) => {
    return engName.match(/\s/) ? engName.toLowerCase().split(' ').join('-') : engName.toLowerCase()
}

export default engNameToLink
