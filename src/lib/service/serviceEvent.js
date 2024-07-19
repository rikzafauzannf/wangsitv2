import { db } from "../firebase/firebaseConfig";
import { addDoc, collection, getDocs, doc, deleteDoc } from "firebase/firestore";

const createEvent = async (dataEvent) => {
  const col = collection(db, "event");
  try {
    await addDoc(col, dataEvent);
  } catch (error) {
    console.error("Error creating document:", error);
    throw error;
  }
};

const getEventData = async () => {
    const col = collection(db, "event");
    const snapshot = await getDocs(col);
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
};

const deleteEvent = async (id) => {
  const docRef = doc(db, "event", id);
  try {
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

export {createEvent, getEventData, deleteEvent}