import React, { Fragment } from 'react';
import { useRoutes } from './hooks/useRoutes';
import { useStore } from './store/store';

const App = () => {
  const [{ auth }] = useStore();
  const content = useRoutes(auth);
  return (
    <Fragment>
      {content}
    </Fragment>
  );
};

export default App;
