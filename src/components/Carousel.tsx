import BSCarousel from 'react-bootstrap/Carousel';
import games from '../games';

interface Props {
  setGame: (i: number) => void
}

function Carousel({ setGame }: Props) {
  return (
    <BSCarousel interval={null}>
      {games.map((game, i) => (
        <BSCarousel.Item>
          <img src={game.img} alt="Image of game" onClick={() => setGame(i)} />
          <BSCarousel.Caption>
            <h3>{game.title}</h3>
            <p>{game.desc}</p>
          </BSCarousel.Caption>
        </BSCarousel.Item>
      ))}
    </BSCarousel>
  )
}

export default Carousel