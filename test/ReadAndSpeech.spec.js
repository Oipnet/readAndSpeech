import { expect, jest } from '@jest/globals'
import ReadAndSpeechNotSupported from '../src/exceptions/ReadAndSpeechNotSupported'
import ReadAndSpeach from '../src/ReadAndSpeech'

describe('ReadAndSpeech', () => {
  test('It should throw an exeption if the navigator not support speechSynthesis', () => {
    expect(() => {
      new ReadAndSpeach
    }).toThrowError(ReadAndSpeechNotSupported)
  })

  test('It should instance the ReadAndSpeech object', () => {
    // Mock spreechSynthesis method
    window.speechSynthesis = {
      speak: jest.fn(() => 'Read the message')
    }
    global.SpeechSynthesisUtterance = jest.fn()

    const readAndSpeech = new ReadAndSpeach

    expect(readAndSpeech).toBeInstanceOf(ReadAndSpeach)
    expect(readAndSpeech.synthesis).toBeDefined()
    expect(readAndSpeech.synthesis).toBeInstanceOf(SpeechSynthesisUtterance)

    expect(readAndSpeech.speak('Hello')).toBe('Read the message')
  })
})