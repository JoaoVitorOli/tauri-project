import useSound from 'use-sound';

import audio from "./assets/audio.mp3";

import "./App.css";

function App() {
  const [play] = useSound(audio);

  function handleClick() {
    play();
  }

  return (
    <div className="container">
      <button 
        type="button"
        onClick={() => handleClick()}
      >
        😀
      </button>
    </div>
  );
}

export default App;
