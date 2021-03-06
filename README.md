# readAndSpeech

## Présentation
ReadAndSpeech is an opensource library.
You can read a text using the native API [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis).

## Installation
Use npm to install the library.
```
npm install readandspeech
```

## Usage
```javascript
import ReadAndSpeech from 'readandspeech'

const readAndSpeech = new ReadAndSpeech // Initialise reader

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
  readAndSpeech.speak('Hello world')
})
```

You can enable a emoji parser with the parameter translateEmoji. Default value is false.
Translator is based on [emojilib](https://github.com/muan/emojilib)
```javascript
import ReadAndSpeech from 'readandspeech'

const readAndSpeech = new ReadAndSpeech({
  translateEmoji: true
}) // Initialise reader
````

## Contribute
You can contribute to improve the project.
Fork the repo, create a branch, push your modification and submit a pull request