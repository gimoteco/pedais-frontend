

export function getOptimizedImage(url: string, width: number = 300) {

    return (url && !url.startsWith('blob')) ?
        `https://aiybgfffno.cloudimg.io/v7/${url}?width=${width}` : url;
}
