import React, {useState, useEffect} from 'react';
import { firebase } from '../../firebase/firebase';
import { useParams, useHistory } from 'react-router-dom';

// inicializar la base de datos
const db = firebase.firestore();

const COURT_COLLECTION = 'courts';

type TParams = { id: string };

const CourtEdit: React.FC =() => {
  const { id } = useParams<TParams>();
  
  const history = useHistory();

  const [nameCourt, setNameCourt] = useState<string>('');
  const [streetCourt, setStreetCourt] = useState<string>('');
  const [cityCourt, setCityCourt] = useState<string>('');

  const [reload, setReload] = useState<number>(0);
   
  useEffect(() => {
    const getCourt = async () => {
      try {
        const courtDoc = await db.collection(COURT_COLLECTION).doc(id).get();
        const court = courtDoc.data();
        if(court) {
          setNameCourt(court.name);
          setStreetCourt(court.street);
          setCityCourt(court.city);
        }
       
      } catch (e) {
        console.log(e);
      }
    };
    getCourt();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  // 4. UPDATE -> Update of CRUD
  const handleOnSubmitCourt = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await db.collection(COURT_COLLECTION).doc(id).update({
        name: nameCourt,
        street: streetCourt,
        city: cityCourt,
      });
      setReload(new Date().getTime());
      history.push('/courts');
    } catch(error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <section>
      <h2>Edit court</h2>
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
        <button>Edit company</button>
      </form>
    </section>
  );
};

export { CourtEdit };
