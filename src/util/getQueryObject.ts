const getQueryObject = (query: any) => {
    const genres = query.genres ?? 'all'
    const pathname = '/movies/[genres]'
    const pathnameCopy = `/movies/${genres}`
    const queryCopy = Object.assign({}, query)
    delete queryCopy.genres

    return {
        genres,
        pathname,
        pathnameCopy,
        queryCopy,
    }
}

export default getQueryObject
