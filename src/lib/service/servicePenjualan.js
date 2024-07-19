import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, doc, deleteDoc, query, where } from "firebase/firestore";

const createPenjualan = async (dataPenjualan) => {
  const col = collection(db, "penjualan");
  try {
    await addDoc(col, dataPenjualan);
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

const getPenjualanData = async () => {
    const col = collection(db, "penjualan");
    const snapshot = await getDocs(col);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
};

const getPenjualanByField = async (field, value) => {
  const col = collection(db, "penjualan");
  const q = query(col, where(field, "==", value));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

const deletePenjualan = async (id) => {
  const docRef = doc(db, "penjualan", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

const getPenjualanByDateAndKecamatan = async (date, kecamatan) => {
  const col = collection(db, "penjualan");
  const q = query(col, where("createAt", "==", date), where("kecamatan", "==", kecamatan));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

export { createPenjualan, getPenjualanData, getPenjualanByField, deletePenjualan, getPenjualanByDateAndKecamatan }