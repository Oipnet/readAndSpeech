import ReadAndSpeechNotSupported from './exceptions/ReadAndSpeechNotSupported'

class ReadAndSpeech {
  constructor() {
    console.log('it\'s my local')
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
    this.synthesis.voice = voice
  }

  currentVoice() {
    return this.synthesis.voice
  }
}

export default ReadAndSpeech