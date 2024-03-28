import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [text, setText] = useState(null);

  const handleNameClick = () => {
    // input 요소로 부터 바로 참조로 부터 값을 받는다.
    setText(playerName.current.value);
    playerName.current.value = '';
  };


  return (
    <section id="player">
      <h2>Welcome {text ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text" />
        <button onClick={handleNameClick}>Set Name</button>
      </p>
    </section>
  );
}
