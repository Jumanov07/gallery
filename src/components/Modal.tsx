import { motion } from "framer-motion";
import { MouseEvent } from "react";

interface Props {
  setSelectedImg: (value: string) => void;
  selectedImg: string;
}

const Modal = ({ selectedImg, setSelectedImg }: Props) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains("backdrop")) {
      setSelectedImg("");
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="your_picture"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
