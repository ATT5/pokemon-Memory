import { useSelector } from "react-redux";

const Score = () => {
  const level = useSelector((state) => state.game.level);
  const score = useSelector((state) => state.game.score);
  return (
    <div className=" absolute top-3 right-3 flex bg-yellow-400 p-3 rounded-3xl">
      <p className="font-bold">Score:</p>
      <p>
        {score}/{level}
      </p>
    </div>
  );
};

export default Score;
