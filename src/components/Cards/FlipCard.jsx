import { motion } from "framer-motion";
import { faceDow } from "../../assets";
import { useEffect, useState } from "react";
import TiltCard from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { gameAction } from "../../store/game";

const FlipCard = ({ pokemon, onShuffleCards }) => {
  const up = useSelector((state) => state.game.flip);
  const [down, setDown] = useState(true);
  const dispatch = useDispatch();
  const x = useSelector((state) => state.game.pokemonsSelected);

  const handleFlip = () => {
    dispatch(gameAction.flipDown());
    dispatch(gameAction.getPokemon(pokemon.name));
    console.log(x);
    setTimeout(() => {
      dispatch(gameAction.flipDown());
    }, 2000);
  };

  useEffect(() => {
    if (up) {
      setTimeout(() => {
        setDown(false);
        setTimeout(() => {
          setDown(true);
          onShuffleCards();
        }, 1000); // Adjust the timing for a smoother transition
      }, 500);
    }
  }, [up]);

  const variants = {
    rotate: { rotateY: [0, 90, 0, 90, 0] },
  };

  return (
    <>
      <motion.div
        className="w-[180px] h-52 md:w-48 md:h-52  z-20 rounded-xl mb-3 "
        variants={variants}
        animate={up ? "rotate" : ""}
        transition={{ stagger: 0, duration: 2 }}
      >
        {/* front of the card */}
        {down && (
          <div className="w-full h-52 md:w-48 md:h-52 " onClick={handleFlip}>
            <TiltCard pokemon={pokemon} />
          </div>
        )}
        {/* back of the card */}
        <div
          className={`w-full h-52 md:w-48 md:h-522   absolute ${
            down ? "hidden" : ""
          }`}
        >
          <img
            src={faceDow}
            alt="pokemon card"
            className={`w-full h-full ${down ? "hidden" : ""}`}
          />
        </div>
      </motion.div>
    </>
  );
};

export default FlipCard;
