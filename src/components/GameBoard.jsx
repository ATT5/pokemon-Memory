import { pokeball } from "../assets";
import storePokemons from "../store/GetPokemons";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FlipCard from "./Cards/FlipCard";

const GameBoard = () => {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const level = useSelector((state) => state.game.level);

  useEffect(() => {
    if (pokemonList.length === 0) {
      const getPokemons = async () => {
        setLoading(true);
        const pokemons = await storePokemons(level);
        console.log(pokemons);
        setPokemonList(pokemons);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };
      getPokemons();
    }
  }, []);

  ///fisher-yates algorithm
  const randomOrder = (array) => {
    let i = array.length - 1;
    while (i > 0) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      i--;
    }
  };

  const shuffleCards = () => {
    const shuffledArray = [...pokemonList];
    randomOrder(shuffledArray);
    setPokemonList(shuffledArray);
  };

  return (
    <div className="  w-full h-screen flex flex-wrap  justify-around md:justify-center items-center pt-24  md:gap-5   ">
      {!loading && (
        <>
          {pokemonList.map((pkm, index) => (
            <FlipCard pokemon={pkm} onShuffleCards={shuffleCards} key={index} />
          ))}
        </>
      )}
      {loading && (
        <img
          src={pokeball}
          alt="pokeball"
          width={150}
          height={150}
          className="absolute top-0 bottom-0 right-0 left-0 m-auto "
        />
      )}
    </div>
  );
};

export default GameBoard;
