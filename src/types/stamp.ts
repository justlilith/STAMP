import { DimensionalValues, FlexibleValue, SampledValue, StampCreationArgs } from "../types"

interface Stamp {
    audio: AudioBuffer
    dimensionalValues?: DimensionalValues
}
export type { Stamp }