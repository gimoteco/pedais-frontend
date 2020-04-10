export function getOptimizedImage(url: string) {

    return (url && !url.startsWith('blob')) ?
        `https://aiybgfffno.cloudimg.io/v7/${url}?width=300` : url;
}
