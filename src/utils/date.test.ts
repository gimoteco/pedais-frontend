import { addDays, subDays } from "date-fns"
import { isPast } from "./date"

describe("date utils", () => {
    const today = new Date()

    describe("isPast", () => {
        it("should be false for future date", () => {
            const tomorrow = addDays(today, 1)

            expect(isPast(tomorrow)).toBe(false)
        })

        it("should be true for past date", () => {
            const yesterday = subDays(today, 1)

            expect(isPast(yesterday)).toBe(true)
        })
    })
})