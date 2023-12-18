import { projectFirestore, projectStorage } from "../firebase/config";

const deleteDocument = async (collection: string, docId: string) => {
  try {
    await projectFirestore.collection(collection).doc(docId).delete();
  } catch (error) {
    alert(`Error removing document: ${error}`);
  }
};

const deleteFile = async (fileUrl: string) => {
  const urlParts = fileUrl.split("/");
  const lastPart = urlParts.pop();

  if (lastPart) {
    const fileName = lastPart.split("?")[0];

    const storageRef = projectStorage.ref().child(fileName);
    await storageRef.delete();
  }
};

export { deleteDocument, deleteFile };
