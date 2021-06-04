class ReadAndSpeechNotAVoice extends Error {
  constructor(msg) {
    super(msg)
    this.name = 'ReadAndSpeechNotAVoice'
  }
}

export default ReadAndSpeechNotAVoice