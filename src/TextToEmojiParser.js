import emojilib from 'emojilib'

class TextToEmojiParser {
  parse(word) {
    if (! emojilib[word]) {
      return word
    }
    
    return emojilib[word][0].replaceAll('_', ' ')
  }
}

export default TextToEmojiParser