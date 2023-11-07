import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { clickSound } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { gameAction } from "../store/game";

const levels = {
  easy: { title: "Easy", level: 5 },
  medium: { title: "Medium", level: 10 },
  hard: { title: "Hard", level: 15 },
};

export const Menu = () => {
  const [selected, setSelected] = useState(0);
  const audioRef = useRef(null);
  const dispatch = useDispatch();

  const handleSelected = (index, level) => {
    setSelected(index);
    dispatch(gameAction.setLevel(level));
    // click sound
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const handleGame = () => dispatch(gameAction.okRules());

  return (
    <motion.div
      className="w-2/3 md:w-1/3 h-56 bg-white rounded-xl border-8 border-double border-black flex flex-col  items-center "
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: [0, 0.3, 0.9, 1], y: "0" }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <h2 className="text-3xl mb-8">Level</h2>
      <ul className="">
        {Object.values(levels).map((lv, index) => (
          <li key={lv.title} className="flex items-start gap-2">
            {selected === index && (
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
                className="w-0 h-0 
  border-t-[10px] border-t-transparent
  border-l-[15px] border-l-black
  border-b-[10px] border-b-transparent"
              ></motion.div>
            )}
            <p
              className="text-xl cursor-pointer"
              onClick={() => handleSelected(index, lv.level)}
            >
              {lv.title}
            </p>
          </li>
        ))}
      </ul>
      <button
        className=" border-8 border-double  border-black active:bg-slate-300 p-1 my-1 "
        onClick={handleGame}
      >
        start game
      </button>
      <audio ref={audioRef}>
        <source src={clickSound} type="audio/mpeg" />
      </audio>
    </motion.div>
  );
};
