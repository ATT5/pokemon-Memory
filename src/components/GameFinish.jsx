import { meow, pikachu } from "../assets";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { gameAction } from "../store/game";

const GameInfo = ({ status, score }) => {
  return (
    <>
      <h4 className="font-bold text-3xl">{status.title}</h4>
      <p className="text-lg lg:text-2xl">
        Your Final score: <span className="font-bold text-2xl">{score}</span>
      </p>
      <img
        src={status.img}
        alt="pokemon"
        className="w-28 h-28 object-contain"
      />
    </>
  );
};

const GameFinish = () => {
  const score = useSelector((state) => state.game.score);
  const win = useSelector((state) => state.game.win);
  const dispatch = useDispatch();

  const playerStatus = win
    ? { title: "You win!", img: pikachu }
    : { title: "Game Over", img: meow };

  return (
    <Modal>
      <motion.div
        className="w-5/6 md:w-1/3  flex flex-col items-center bg-white rounded-xl border-8 border-double border-black  font-pixel"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: [0, 0.3, 0.9, 1], y: "0" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        {/* Control game status */}
        <GameInfo status={playerStatus} score={score} />

        <button
          className="border-8 border-double border-black bg-green-300  p-1 my-1 "
          onClick={() => dispatch(gameAction.playAgain())}
        >
          Play again
        </button>
        <button
          className="border-8 border-double bg-red-500 border-black  p-1 my-1 "
          onClick={() => dispatch(gameAction.exit())}
        >
          Exit
        </button>
      </motion.div>
    </Modal>
  );
};

export default GameFinish;
