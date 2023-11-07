import { music, pokemonSong } from "../assets";
import { useRef, useState, useEffect } from "react";

const MusicButton = () => {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handleSong = () => {
    if (!play) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setPlay(true);
    } else {
      audioRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <div
      className="w-11 h-11 lg:h-12 lg:w-12 rounded-full bg-white absolute top-3 left-3 flex justify-center cursor-pointer active:bg-slate-400"
      onClick={handleSong}
    >
      <img
        src={music}
        alt="music"
        width={20}
        height={20}
        className="object-contain"
      />
      {!play && (
        <div className="absolute w-1 h-full bg-red-500 rotate-45"></div>
      )}

      <audio ref={audioRef} loop>
        <source src={pokemonSong} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MusicButton;
