import firebase from "firebase";
import { COURT_COLLECTION } from "../config/config";
import { Court } from "../types/courts";

const db = firebase.firestore();
export const getCourts = async (): Promise<Court[]> => {

    const courts: Court[] = [];
    try {
      const courtsDoc = await db.collection(COURT_COLLECTION).get();
      // Create personal array - // Crear array de companies con la estructura de nuestro tipado
     
      // forEach firestone object and extract my fields
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