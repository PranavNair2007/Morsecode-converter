import { useState } from 'react';

const MORSE_CODE_DICT = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
  'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
  'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
  'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
  'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....',
  '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  ' ': '/'
};

const ExampleComponent = () => {
  const [inputText, setInputText] = useState('');

  const translateToMorse = (input) => {
    if (!input) return '';
    return input
      .toUpperCase()
      .split('')
      .map(char => MORSE_CODE_DICT[char] || '')
      .join(' ')
      
  };

  const morseCode = translateToMorse(inputText);

  return (
    <main className="translator-container">
      <h1 className="title">Morse Code Translator</h1>

      <div className="box-container">
        <div className="input-group">
          <label htmlFor="inputText">Input Text</label>
          <textarea
            id="inputText"
            placeholder="Type English text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <button className="clear-btn" onClick={() => setInputText('')}>
            Clear Text
          </button>
        </div>

        <div className="input-group">
          <label htmlFor="outputText">Morse Code</label>
          <div id="outputText" className={`output-box ${!morseCode ? 'empty' : ''}`}>
            {morseCode || '... --- ...'}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExampleComponent;
