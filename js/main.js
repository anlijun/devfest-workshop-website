import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';

const visualizer = document.getElementById('visualizer');
const audio = new Audio();
audio.src = 'https://ccmixter.org/content/admiral_bob/admiral_bob_-_The_Remix_Wars_-_Stems.mp3'; // Placeholder music
audio.crossOrigin = 'anonymous';
audio.loop = true;

const audioMotion = new AudioMotionAnalyzer(visualizer, {
  source: audio,
  height: 200,
  width: visualizer.offsetWidth,
  mode: 10,
  leds: true,
  gradient: 'prism',
});

let playing = false;
window.addEventListener('click', () => {
  if (!playing) {
    audio.play();
    playing = true;
  }
});
