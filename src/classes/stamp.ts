import { FlexibleValue, SampledValue, StampCreateFromArgs, StampCreationArgs } from "../types"

class Stamp {
    constructor(args?: StampCreationArgs) {
        this.audio = args?.audio ?? undefined
        this.dimensionalValues = args?.dimensionalValues ?? undefined
        this.name = args?.name ?? undefined
    }
    audio?: AudioBuffer
    dimensionalValues?: {
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
    name?: string

    create = {
        from: (inputAudio: AudioBuffer, args?:StampCreateFromArgs) => {
            return new Stamp({audio: inputAudio, name: args?.name ?? undefined})
        }
    }

    compareStamps = (dimensions: Array<string>, stamps: Array<Stamp>) => {

    }
}

export { Stamp }