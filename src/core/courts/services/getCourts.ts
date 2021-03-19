import firebase from "firebase";
import { COURT_COLLECTION } from "../config/config";
import { Court } from "../types/courts";

const db = firebase.firestore();

const getCourts = async (): Promise<Court[]> => {
  const courts: Court[] = [];
  try {
    const courtsDoc = await db.collection(COURT_COLLECTION).get();
    courtsDoc.forEach((doc) => {
      const court = doc.data();
      courts.push({
        id: doc.id,
        name: court.name,
        street: court.street,
        city: court.city,
      } as Court);

      });
      } catch (e) {
          console.log('e: ',e);
      }
  return courts;
};

export { getCourts };