import React, {useState, useEffect} from 'react';
import { firebase } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/rootReducers';
import './Courts.css'
import { Court } from '../../../core/courts/types/courts';
import {getCourts} from '../../../core/courts/services/getCourts'


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

  const [reload, setReload] = useState<number>(0);

  // 1. GET -> Read of CRUD
  useEffect(() => {
    const initCourts = async () => {
      const courts = await getCourts();
      setCourts(courts);
    };
    initCourts();
  }, [reload]);

  const clearForm = () => {
    setNameCourt('');
    setStreetCourt('');
    setCityCourt('');
  };

  // 2. ADD -> Create of CRUD
  const handleOnSubmitCourt = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // llamada devolverá una promesa con el objeto de tipo firebase con la refencia a ese documento
    try {
      const docRef = await db.collection(COURT_COLLECTION).add({
        name: nameCourt,
        street: streetCourt,
        city: cityCourt,
      });
      console.log(docRef);
      setReload(new Date().getTime());
      clearForm();
    } catch(error) {
      console.error('Error adding document: ', error);
    }
  };

  // 3. DELETE -> Delete of CRUD
  const handleDeleteCourt = async (id: string): Promise<void> => {
    try {
      await db.collection(COURT_COLLECTION).doc(id).delete();
      console.log('Doc delete ', id);
      setReload(new Date().getTime());
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };
  return (
    <section className="Courts">
      <aside><h2>Hello, <strong>{user.user?.email}</strong>.</h2></aside>
      <header><h2>Courts</h2></header>
      <ul>
        {courts.map((court) => {
          return ( 
            <>
            <li key={court.id}>
              <p>Name: <strong>{court.name}</strong></p>
              <p>Street: <strong>{court.street}</strong></p>
              <p>City: <strong>{court.city}</strong></p>
              <div>
                <h3>Actions</h3>
                <Link to={`/court/${court.id}/update`}>Edit</Link> 
                <button onClick={() => handleDeleteCourt(court.id)}>Delete</button>
              </div>
            </li>
            
            </>
          );
        })}  
      </ul>
      <aside>
        <h2>Create court</h2>
        <form className="courtsForm" onSubmit={handleOnSubmitCourt}>
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
