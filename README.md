# STAMP

Sonic Translation and Matching Package (abbr. Stamp)

## What is this?

STAMP is a library for categorization and comparison of sound and music. It utilizes an interpretive approach, rather than prescriptive, in order to uniquely fingerprint audio. As a comparison, a waveform is one representation of a sound, but so is this list: [loud, placid, brassy, sonorous].

STAMP provides a quantified approach that revolves around metadata. A Stamp is an audio file with extra metadata derived from the audio itself.

## Usages

Here are a few use cases for STAMP/Stamps:

- two Stamps can be compared on a richer level than audio alone
- quantifying sonic content allows someone to find music in the same "mood"
- a library of Stamps leads to discovery of similar Stamps, so that people can more easily discover music that suits them
- using Stamps, one could chart out a map of their sonic interests, and how those relate to other sounds

## STAMP structure

A Stamp is a collection of measurements regarding an input sound, packaged with the sound itself. STAMP can read, create, and compare Stamps. Each dimensional value of a Stamp is a number, with `1` existing as the utmost extreme of that dimension, and `0` as the absolute minimum (no data available). The STAMP format is described the end of this readme.

Due to this, two Stamps can be compared across multiple dimensions to create a unified matching value between `0` and `1`. However, because the dimensional data persists, you could also create your own matching criteria. For example:

```ts
import { Stamp } from 'stamp'

const stampCalm: Stamp = Stamp.create.from('audio0.wav', { name: 'stampCalm'})
const stampRushed: Stamp = Stamp.create.from('audio1.wav', { name: 'stampRushed'})
const matchValues: Stamp.StampComparison = Stamp.compareStamps(['pace', 'tempo'], [stampCalm, stampRushed])

/*
matchValues: {
    pace: {
        stampCalm: 0.1,
        stampRushed: 0.8
    },
    tempo: {
        stampCalm: 0.1,
        stampRushed: 0.4
    }
}
*/

```

## Wrenching on STAMP

### General Notes

STAMP is a Javascript library written in Typescript, using a flexible, but functional, paradigm. Mutability is replaced with a use of functions as pipelines. Stamps from STAMP thereby contain a copy of the original audio.

### Dependencies

STAMP leans heavily on the following packages:

- [audio-decode](https://npmjs.com/package/audio-decode)
- [audio-type](https://www.npmjs.com/package/audio-type)
- [pitchy](https://www.npmjs.com/package/pitchy)

### Development

STAMP is written in [Typescript](https://typescriptlang.org/).

To build STAMP, use `npm run build`. By default, STAMP is built and stored in `./dist`.

### Implementation Notes

A Stamp is created by applying the following processes to audio:

- frequency filtering
- (rolling) pitch detection
- static analysis
- temporal sampling and lookbehind comparison
- voice isolation

### Testing

Testing is completed through [zora](https://npmjs.com/package/zora), using [tap](https://npmjs.com/package/tap) and [faucet](https://npmjs.com/package/faucet).

To test, use `npm run test`. For more human-readable output, use `npm run test:human`. For continuous testing while developing, use `npm run test:watch` or `npm run test:human:watch`.

## STAMP Format

Because a Stamp is audio alongside metadata and functions, the Stamp format is represented as a class. For type definitions, please see `./types`.

## Miscellaneous Notes

STAMP is a work in progress. It is not yet licensed for any use, but will be one day.