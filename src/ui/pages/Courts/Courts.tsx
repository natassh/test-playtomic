import React, {useState, useEffect, Fragment} from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector } from 'react-redux';
import { firebase } from '../../firebase/firebase';
import {Court} from '../../Store/modules/court/types/court'


// inicializar la base de datos
const db = firebase.firestore();

const Courts: React.FC =() => {
  const user = useSelector((state: RootState) => state.user);
  const [courts, setCourts] = useState<Court[]>([]);

  useEffect(() => {
    const getCourts = async () => {
      try {
        // get -> Read
        const courtsDoc = await db.collection('courts').get();
        // Create personal array - // Crear array de companies con la estructura de nuestro tipado
        const courts: Court[] = [];
        // forEach firestone object and extract my fields
        courtsDoc.forEach((doc) => {
          const court = doc.data();
          courts.push({
            name: court.name,
            city: court.city,
            street: court.street,
          } as Court);
        
        });
        console.log('courtsDoc: ',courtsDoc);
        setCourts(courts);
      } catch (e) {
        console.log('e: ',e);
      }
    };
    getCourts();
  }, []);

  return (
    <section>
      <header><h1>Pistas</h1></header>
      hello: {user.user?.displayName} - {user.user?.email}
      {courts.map((court) => {
        return ( 
          <Fragment key={court.name}>
            <p>name: {court.name}</p>
            <p>city: {court.city}</p>
            <p>street: {court.street}</p>
          </Fragment>
        );
      })}
    </section>
  );
};

export { Courts };
