import { useEffect } from "react";
import CountUp from "react-countup";
import useStorage from "../hooks/useStorage";

const start: number = 0;
const end: number = 100;

interface Props {
  file: File | null;
  setFile: (value: File | null) => void;
}

const ProgressBar = ({ file, setFile }: Props) => {
  const { url } = useStorage(file);

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
      </div>
    </>
  );
};

export default ProgressBar;
