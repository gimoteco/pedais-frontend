import { getOptimizedImage } from "./image"

describe("image utils", () => {
    describe("getOptimizedImage", () => {
        it('should get an optimized image url', () => {
            const width = 100
            const url = 'teste.png'

            const optimizedUrl = getOptimizedImage(url, width)

            expect(optimizedUrl).toBe(`https://aiybgfffno.cloudimg.io/v7/${url}?width=${width}`)
        })

        it('should not get an optimized image url if is a blob', () => {
            const width = 100
            const url = 'blob:teste.png'

            const optimizedUrl = getOptimizedImage(url, width)

            expect(optimizedUrl).toBe(url)
        })

        it.each([null, '', false, undefined])('should not generate url for %p', (falsyValueUrl) => {
            const width = 100

            const optimizedUrl = getOptimizedImage(falsyValueUrl as string, width)

            expect(optimizedUrl).toBe(falsyValueUrl)
        })
    })
})