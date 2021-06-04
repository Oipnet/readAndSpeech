import ReadAndSpeechNotAVoice from './exceptions/ReadAndSpeechNotAVoice'
import ReadAndSpeechNotSupported from './exceptions/ReadAndSpeechNotSupported'

class ReadAndSpeech {
  constructor() {
    if (! ('speechSynthesis' in window)) {
      throw new ReadAndSpeechNotSupported('speechSynthesis is not supported on your browser')
    }

    this.awaitVoices = new Promise(done => window.speechSynthesis.onvoiceschanged = done)
    this.synthesis = new SpeechSynthesisUtterance()
  }

  speak(msg) {
    this.synthesis.text = msg

    return window.speechSynthesis.speak(this.synthesis)
  }

  async speakers() {
    const voices = await this.awaitVoices

    return window.speechSynthesis.getVoices()
  }

  changeVoice(voice) {
    try {
      this.synthesis.voice = voice
    } catch (e) {
      throw new ReadAndSpeechNotAVoice('voice parameter is not a SpeechSynthesisVoice')
    }
  }

  currentVoice() {
    return this.synthesis.voice
  }
}

export default ReadAndSpeech