export type Game = {
  title: string,
  desc: string,
  img: string,
  link: string,
}

const games: Game[] = [
  {
    title: "Pong",
    desc: "Made with vanilla HTML/CSS/JS and a custom game engine",
    img: "./assets/screenshots/pong2.png",
    link: "https://pong-virid.vercel.app/",
  },
  {
    title: "Snake",
    desc: "Made with Svelte and rendered with the Canvas API",
    img: "./assets/screenshots/snake.png",
    link: "./pages/snake.html",
  }
];

export default games;