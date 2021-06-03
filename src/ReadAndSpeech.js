import ReadAndSpeechNotSupported from './exceptions/ReadAndSpeechNotSupported'

class ReadAndSpeech {
  constructor() {
    if (! ('speechSynthesis' in window)) {
      throw new ReadAndSpeechNotSupported('speechSynthesis is not supported on your browser')
    }

    this.synthesis = new SpeechSynthesisUtterance()
  }

  speak(msg) {
    this.synthesis.text = msg

    return window.speechSynthesis.speak(this.synthesis)
  }
}

export default ReadAndSpeech