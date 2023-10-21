import { FlexibleValue, SampledValue } from "./"

interface DimensionalValues {
    assonance?: SampledValue
    dissonance?: SampledValue
    emphasis?: SampledValue
    feedback?: SampledValue
    harmony?: SampledValue
    mood?: SampledValue
    passion?: SampledValue
    sibilance?: SampledValue
    sonicWidth?: SampledValue
    tempo?: FlexibleValue
}

export type { DimensionalValues }