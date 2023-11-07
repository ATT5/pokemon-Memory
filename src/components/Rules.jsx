import { wooper } from "../assets";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { gameAction } from "../store/game";
import { motion } from "framer-motion";

const Rules = () => {
  const dispatch = useDispatch();

  return (
    <Modal>
      <motion.div
        className="w-5/6 md:w-1/3  flex flex-col items-center bg-white rounded-xl border-8 border-double border-black  font-pixel"
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: [0, 0.3, 0.9, 1], y: "0" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        <h4 className="font-bold text-3xl">rules</h4>
        <p className="text-center">
          The goal of the game is to select each of the unique cards without
          choosing the same card <span className="font-bold">twice.</span>
        </p>
        <img src={wooper} alt="pokemon" className="w-28 h-28 object-contain" />{" "}
        <button
          className="border-8 border-double border-black active:bg-slate-300 p-1 my-1 hover:bg-yellow-400"
          onClick={() => dispatch(gameAction.startGame())}
        >
          ready
        </button>
      </motion.div>
    </Modal>
  );
};

export default Rules;
