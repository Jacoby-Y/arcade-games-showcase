import { Game as GameType } from "../games"

interface Props {
  game: GameType
}

function Game({ game }: Props) {
  return (
    <main id="Game">
      <iframe src={game.link} />
    </main>
  )
}

export default Game;