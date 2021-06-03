class ReadAndSpeechNotSupported extends Error {
  constructor(msg) {
    super(msg)
    this.name = 'ReadAndSpeechNotSupported'
  }
}

export default ReadAndSpeechNotSupported