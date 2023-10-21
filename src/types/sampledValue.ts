interface SampledValue {
    average: {
        value: number
    }
    total: {
        value: number
    }
    rolling?: {
        sampleSizeMs: number
        value: number
    }
}

export type { SampledValue }