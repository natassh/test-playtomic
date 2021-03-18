import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/rootReducers';
import './Dashboard.css'

const Dashboard: React.FC =() => {
  // acceder al estate global como primer párametro y quedarnos con nuestra parte que nos interesa, en este caso user
  const user = useSelector((state: RootState) => state.user);
  return (
    <section className="Dashboard">
      <header><h2>Hello, <strong>{user.user?.email}</strong>.</h2></header>
    </section>
  );
};

export { Dashboard };