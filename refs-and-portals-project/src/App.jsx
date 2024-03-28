import Player from './components/Player.jsx';
// import TimerChallenge from './components/TimerChallenge.jsx';
import TimerChallengeInterval from './components/TimerChallengeInterval.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallengeInterval title="Easy" targetTime={1}/>
        <TimerChallengeInterval title="Not Easy" targetTime={5}/>
        <TimerChallengeInterval title="Getting Tough" targetTime={10}/>
        <TimerChallengeInterval title="Props Only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
