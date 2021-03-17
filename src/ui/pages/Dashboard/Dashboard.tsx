import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Dashboard: React.FC =() => {
  // acceder al estate global como primer párametro y quedarnos con nuestra parte que nos interesa, en este caso user
  const user = useSelector(state => state.user);
  console.log('user dashboard: ', user)
  return (
    <section>
      <header><h1>hello: {user.user.user}</h1></header>
    </section>
  );
};

export { Dashboard };