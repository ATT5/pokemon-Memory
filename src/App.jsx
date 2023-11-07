import { wallpaper } from "./assets";
import GameBoard from "./components/GameBoard";
import { Menu } from "./components/Menu";
import MusicButton from "./components/MusicButton";
import Title from "./components/Title";
import Score from "./components/Score";
import Rules from "./components/Rules";
import { useSelector } from "react-redux";
import GameFinish from "./components/GameFinish";

function App() {
  const playingGame = useSelector((state) => state.game.playing);
  const rules = useSelector((state) => state.game.rules);
  const keepPlaying = useSelector((state) => state.game.continue);
  const player = useSelector((state) => state.game.playerIsAlive);

  return (
    <main className="w-full  font-pixel bg-cover lg:bg-contain flex flex-col items-center ">
      <div
        className="fixed top-0 -z-10 w-full h-screen bg-cover lg:bg-contain  bg-[#388041] "
        style={{
          backgroundImage: `url(${wallpaper})`,
        }}
      ></div>

      {/* Handle the music */}
      <MusicButton />

      {/* Starting screen 🏀 */}
      {!rules && !keepPlaying && (
        <section className="w-full h-screen flex flex-col items-center overflow-hidden">
          <Title />
          <Menu />
        </section>
      )}

      {/* Gmae rules */}
      {rules && !playingGame && <Rules />}

      {/* Game  💥*/}
      {playingGame && (
        <section className="w-full h-screen  flex items-center justify-center ">
          <Score />
          <GameBoard />
        </section>
      )}
      {!player && <GameFinish />}
    </main>
  );
}

export default App;
