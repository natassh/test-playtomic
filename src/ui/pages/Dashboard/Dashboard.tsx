import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/rootReducers';

const Dashboard: React.FC =() => {
  // acceder al estate global como primer párametro y quedarnos con nuestra parte que nos interesa, en este caso user
  const user = useSelector((state: RootState) => state.user);
  console.log('user dashboard: ', user)
  return (
    <section>
      <header><h1>hello: {user.user?.email}</h1></header>
    </section>
  );
};

export { Dashboard };