import { getFirestore, getDocs, collection } from "firebase/firestore";

const db = getFirestore(app);

const fetchData = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    const dataAsString = JSON.stringify(doc.data(), null, 2);
    console.log(`${doc.id} => ${dataAsString}`);
  });
};
fetchData();
