import _ from 'lodash';
import Speech from '../node_modules/speak-tts/lib/speak-tts.js'

const _addVoicesList = (voices) => {
	const list = window.document.createElement('div')
	let html = '<h2>Available Voices</h2><select id="languages"><option value="">autodetect language</option>'
	voices.forEach((voice) => {
		html += `<option value="${voice.lang}" data-name="${voice.name}">${voice.name} (${voice.lang})</option>`
	})
	list.innerHTML = html
	window.document.body.appendChild(list)
}

function _init() {
	
	const speech = new Speech()
	console.log(speech)
	speech.init({
		'volume': 0.5,
		'lang': 'en-GB',
		'rate': 1.0,
		'pitch': 1,
		//'voice':'Google UK English Male',
		//'splitSentences': false,
		'listeners': {
			'onvoiceschanged': (voices) => {
				console.log("Voices changed", voices)
			}
		}
	}).then((data) => {
		console.log("Speech is ready", data)
		_addVoicesList(data.voices)
		
		_prepareSpeakButton(speech)

	}).catch(e => {
		console.error("An error occured while initializing : ", e)
	})
	const text = (speech.hasBrowserSupport()) ? 'Hurray, your browser supports speech synthesis' : "Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !"
	
}

function _prepareSpeakButton(speech) {
	
	const speakButton = document.getElementById('play')
	const pauseButton = document.getElementById('pause')
	const resumeButton = document.getElementById('resume')
	const textarea = document.getElementById('currentText')
	const languages = document.getElementById('languages')
	speakButton.addEventListener('click', () => {
		let desiredOption = $("#Speed").val();
		const language = languages.value
		const voice = languages.options[languages.selectedIndex].dataset.name
		if(language) speech.setLanguage(languages.value)

		if(desiredOption == 13.5) speech.rate = 1
		else if(desiredOption == 15) speech.rate=1.15
		else if (desiredOption == 20) speech.rate =1.3
		else if (desiredOption == 22.5) speech.rate = 1.5
		

		
	if(voice) speech.setVoice(voice)
		console.log(textarea.innerHTML)
		console.log(desiredOption)
		console.log(speech.rate)
		console.log(speech)
		speech.speak({
			text: textarea.innerHTML,
			queue: false,
			listeners: {
				onstart: () => {
					console.log("Start utterance")
					startMarquee(desiredOption)
				},
				onend: () => {
					console.log("End utterance")
				},
				onresume: () => {
					console.log("Resume utterance")
				},
				onboundary: (event) => {
					console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.')
				}
			}
		}).then((data) => {
			console.log("Success !", data)
		}).catch(e => {
			console.error("An error occurred :", e)
		})
	})
	
	pauseButton.addEventListener('click', () => {
		speech.pause()
	})
	
	resumeButton.addEventListener('click', () => {
		speech.resume()
	})
	
}

_init()

