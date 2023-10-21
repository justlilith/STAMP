import { Moment } from "./moment"

interface FlexibleValue {
    average: {
        value: number
    }
    moments: Moment[]
}

export type { FlexibleValue }