import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const createKomoditas = async (dataKomoditas) => {
  const col = collection(db, "komoditas");
  try {
    await addDoc(col, dataKomoditas);
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

const getKomoditasData = async () => {
    const col = collection(db, "komoditas");
    const snapshot = await getDocs(col);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
};

const deleteKomoditas = async (id) => {
  const docRef = doc(db, "komoditas", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

export {createKomoditas, getKomoditasData, deleteKomoditas}