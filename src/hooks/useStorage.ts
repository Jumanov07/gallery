import { useState, useEffect } from "react";
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from "../firebase/config";

const useStorage = (file: File | null) => {
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<object>({});
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    if (file) {
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection("images");

      storageRef.put(file).on(
        "state_changed",
        (snap) => {
          let percentage: number =
            (snap.bytesTransferred / snap.totalBytes) * 100;

          setProgress(percentage);
        },

        (err) => {
          setError(err);
        },
        async () => {
          const url: string = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          collectionRef.add({ url, createdAt });
          setUrl(url);
        }
      );
    }
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
