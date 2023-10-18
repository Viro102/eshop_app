import { getFirestore, getDocs, collection, doc, setDoc, query, where } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    const dataAsString = JSON.stringify(doc.data(), null, 2);
    console.log(`${doc.id} => ${dataAsString}`);
  });
};

export const createUserInFirestore = async (userId, userData) => {
  const userRef = doc(db, "users", userId);
  try {
    await setDoc(userRef, userData);
  } catch (error) {
    throw error;
  }
};
