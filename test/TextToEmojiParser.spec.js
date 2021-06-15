import TextToEmojiParser from '../src/TextToEmojiParser'

describe('TextToEmojiParser', () => {
  test('It should transform an emoji to a text', () => {
    const emojiParser = new TextToEmojiParser

    const parsedText = emojiParser.parse('😊')

    expect(parsedText).toBe('smiling face with smiling eyes')
  })

  test('It should not change the text if it\'s not an emoji', () => {
    const emojiParser = new TextToEmojiParser

    const parsedText = emojiParser.parse('Bonjour')

    expect(parsedText).toBe('Bonjour')
  })
})