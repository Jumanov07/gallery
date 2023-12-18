import { useEffect } from "react";
import { useState } from "react";
import { projectFirestore } from "../firebase/config";
import { IDocument } from "../interfaces";

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState<IDocument[]>([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents: IDocument[] = [];

        snap.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...(doc.data() as Omit<IDocument, "id">),
          });
        });

        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
