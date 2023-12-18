import { MouseEvent } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { IDocument } from "../interfaces";
import { deleteDocument, deleteFile } from "../hooks";

interface Props {
  setSelectedImg: (value: string) => void;
}

const ImageGrid = ({ setSelectedImg }: Props) => {
  const { docs } = useFirestore("images");

  const handleClick = (e: MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;

    setSelectedImg(target.src);
  };

  const handleDelete = async (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    await deleteDocument("images", target.title);
    await deleteFile(target.id);
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc: IDocument) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className="img-wrap"
            key={doc.id}
          >
            <motion.img
              onClick={handleClick}
              src={doc.url}
              alt="photo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />

            <motion.div
              onClick={handleDelete}
              className="dlt"
              whileHover={{ opacity: 1 }}
              layout
              title={doc.id}
              id={doc.url}
            >
              DELETE
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
