import React from "react";
import { useEffect } from "react";
import CountUp from "react-countup";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const start = 0;
const end = 100;

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <>
      <div className="global-progress">
        <CountUp start={start} end={end} duration={3} className="count" />
        <p className="percent">%</p>
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
        >
          Loading...
        </motion.div>
      </div>
    </>
  );
};

export default ProgressBar;
