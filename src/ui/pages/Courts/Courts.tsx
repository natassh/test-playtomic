import React, {useState, useEffect, Fragment} from 'react';
import { RootState } from '../../Store/rootReducers';
import { useSelector } from 'react-redux';
import { firebase } from '../../firebase/firebase';
import {Court} from '../../Store/modules/court/types/court'

// NOTA: Toda esta página a nivel de componetización y UX es muy mejorable, 
// la idea aquí es ver como hacer un CRUD, el resto ya es dedicarle tiempo a dejarlo fino.

// inicializar la base de datos
const db = firebase.firestore();

const COURT_COLLECTION = 'courts';

const Courts: React.FC =() => {
  const user = useSelector((state: RootState) => state.user);
  const [courts, setCourts] = useState<Court[]>([]);

  const [nameCourt, setNameCourt] = useState<string>('');
  const [streetCourt, setStreetCourt] = useState<string>('');
  const [cityCourt, setCityCourt] = useState<string>('');

  useEffect(() => {
    const getCourts = async () => {
      try {
        // get -> Read of CRUD
        const courtsDoc = await db.collection(COURT_COLLECTION).get();
        // Create personal array - // Crear array de companies con la estructura de nuestro tipado
        const courts: Court[] = [];
        // forEach firestone object and extract my fields
        courtsDoc.forEach((doc) => {
          const court = doc.data();
          courts.push({
            name: court.name,
            street: court.street,
            city: court.city,
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

  const clearForm = () => {
    setNameCourt('');
    setStreetCourt('');
    setCityCourt('');
  };

  const handleOnSubmitCourt = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log({nameCourt});
    console.log({streetCourt});
    console.log({cityCourt});
    // llamada devolverá una promesa con el objeto de tipo firebase con la refencia a ese documento
    try {
      // get -> Create of CRUD
      const docRef = await db.collection(COURT_COLLECTION).add({
        name: nameCourt,
        street: streetCourt,
        city: cityCourt,
      });
      console.log('docRef: ', docRef);
      clearForm();
    } catch(error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <section>
      hello: {user.user?.displayName} - {user.user?.email}
      <header><h1>Courts</h1></header>
      {courts.map((court) => {
        return ( 
          <Fragment key={court.name}>
            <p>name: {court.name}</p>
            <p>street: {court.street}</p>
            <p>city: {court.city}</p>
          </Fragment>
        );
      })}

      <aside>
        <h2>Create court</h2>
        <form onSubmit={handleOnSubmitCourt}>
          <p>
            <label>Name: <input type="text" value={nameCourt} onChange={(event) => setNameCourt(event.target.value)} /></label>
          </p>
          <p>
            <label>Street: <input type="text" value={streetCourt} onChange={(event) => setStreetCourt(event.target.value)} /></label>
          </p>
          <p>
            <label>City: <input type="text" value={cityCourt} onChange={(event) => setCityCourt(event.target.value)} /></label>
          </p>
          <button>Create court</button>
        </form>
      </aside>
      
    </section>
  );
};

export { Courts };
