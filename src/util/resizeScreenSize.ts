import mediaQuery from 'css-mediaquery'

function createMatchMedia(width: number) {
    return (query: string) => {
        return {
            matches: mediaQuery.match(query, { width }),
            media: '',
            addListener: () => {},
            removeListener: () => {},
            onchange: () => {},
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => true,
        }
    }
}

const resizeScreenSize = (width: number) => {
    window.matchMedia = createMatchMedia(width)
}

export default resizeScreenSize
