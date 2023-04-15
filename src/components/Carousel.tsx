import BSCarousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import games from '../games';

interface Props {
  setGame: (i: number) => void
}

function Carousel({ setGame }: Props) {
  return (
    <BSCarousel interval={null}>
      {games.map((game, i) => (
        <BSCarousel.Item key={i}>
          <Image src={game.img} alt="Screenshot of game" fluid={true} onClick={() => setGame(i)} />
          {/* <img src={game.img} alt="Image of game" onClick={() => setGame(i)} /> */}
          <h3 className="play">Play?</h3>
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