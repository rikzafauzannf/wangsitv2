import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const createKecamatan = async (dataKecamatan) => {
  const col = collection(db, "kecamatan");
  try {
    await addDoc(col, dataKecamatan);
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

const getKecamatanData = async () => {
    const col = collection(db, "kecamatan");
    const snapshot = await getDocs(col);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
};

const deleteKecamatan = async (id) => {
  const docRef = doc(db, "kecamatan", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

export {createKecamatan, getKecamatanData, deleteKecamatan}