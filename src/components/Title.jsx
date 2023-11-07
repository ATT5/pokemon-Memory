import { title } from "../assets";
import { easeIn, motion } from "framer-motion";
const shadow =
  "shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]";

const Title = () => {
  return (
    <>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 0.3, 0.9, 1], scale: [0, 0.5, 1.5, 1] }}
        transition={{ duration: 1.5, ease: easeIn }}
        src={title}
        alt="Pokemon"
        className="md:px-14 px-9 pt-5 w-full h-48  mx-auto mb-10  md:object-contain"
      />
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0, 0.3, 0.9, 1], scale: [0, 0.5, 1.3, 1] }}
        transition={{ duration: 1, ease: easeIn }}
        className={`text-center w-1/2 lg:w-[40%] text-4xl md:text-7xl bg-yellow-400 rounded-md mb-16 ${shadow}`}
      >
        MEMORY
      </motion.h1>
    </>
  );
};

export default Title;
