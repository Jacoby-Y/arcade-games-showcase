// import { Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div id="App">
      <p>Arcade games!</p>
      <Carousel interval={null}>
        <Carousel.Item>
          <h3>Game #1</h3>
          <Carousel.Caption>
            <p>Pong</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Game #2</h3>
          <Carousel.Caption>
            <p>Snake</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Game #3</h3>
          <Carousel.Caption>
            <p>Tetris</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default App;
