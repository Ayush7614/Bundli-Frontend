/*The SpeechSynthesis interface of the Web Speech API is the controller interface 
for the speech service; this can be used to retrieve information about the synthesis 
voices available on the device, start and pause speech, and other commands besides.*/

const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name = "text"]').value;

function populateVoices() {
  voices = this.getVoices(); // array of 25 synthesised voices, including name & language
  voicesDropdown.innerHTML = voices
  .filter(voice => voice.lang.includes('en')) // limit 25 voices to just the ones in English
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
  .join('');
}

//set name of voice to the same as the option chosen.
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

/*The cancel() method of the SpeechSynthesis interface removes all utterances from 
the utterance queue.*/
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if(startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOption() {
  console.log(this.name, this.value); // show rate and pitch values
  msg[this.name] = this.value;
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);


options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));