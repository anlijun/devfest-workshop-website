import AudioMotionAnalyzer from 'https://cdn.skypack.dev/audiomotion-analyzer?min';

const visualizer = document.getElementById('visualizer');
const audio = new Audio();
audio.src = '../music.mp3';
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
