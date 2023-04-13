import Carousel from './components/Carousel';
import Game from './components/Game';
import NavBar from './components/NavBar';
import games from './games';
import { useState } from 'react';

function App() {
  /** The index of selected game */
  const [game, setGame] = useState(-1);

  function backHome() {
    setGame(-1);
  }

  return (
    <div id="App">
      <NavBar goBack={backHome} gameName={games[game]?.title ?? ""} />
      {games[game] == undefined ?
        <Carousel setGame={setGame} /> :
        <Game />
      }
    </div>
  )
}

export default App;
