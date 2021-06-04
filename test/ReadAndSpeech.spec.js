import ReadAndSpeechNotAVoice from "../src/exceptions/ReadAndSpeechNotAVoice"
import ReadAndSpeechNotSupported from "../src/exceptions/ReadAndSpeechNotSupported"
import ReadAndSpeech from "../src/ReadAndSpeech"

describe('ReadAndSpeech', () => {
  test('It should throw an exception if the navigator not support speechSynthesis', () => {
    expect(() => {
      new ReadAndSpeech
    }).toThrowError(ReadAndSpeechNotSupported)
  })

  test('It should instance the ReadAndSpeech object', () => {
    // Mock spreechSynthesis method
    window.speechSynthesis = {
      speak: jest.fn(() => 'Read the message')
    }
    global.SpeechSynthesisUtterance = jest.fn()

    const readAndSpeech = new ReadAndSpeech

    expect(readAndSpeech).toBeInstanceOf(ReadAndSpeech)
    expect(readAndSpeech.synthesis).toBeDefined()
    expect(readAndSpeech.synthesis).toBeInstanceOf(SpeechSynthesisUtterance)

    expect(readAndSpeech.speak('Hello')).toBe('Read the message')
  })

  test('It should thow an exception if voice is not a SpeechSynthesisVoice when you change the voice', () => {
    window.speechSynthesis = {
      speak: jest.fn(() => 'Read the message')
    }
    global.SpeechSynthesisUtterance = class {
      constructor() {}
      set voice(param) {
        throw new TypeError
      }
    }

    const readAndSpeech = new ReadAndSpeech

    expect(() => {
      readAndSpeech.changeVoice('not a voice')
    }).toThrowError(ReadAndSpeechNotAVoice)
  })
})