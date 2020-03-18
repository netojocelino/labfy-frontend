import React from 'react';

import GlobalStyle from './page/styles/global';
import Header from './page/Header'
import Board from './page/Board';
import Register from './page/Register';


function Application() {
  const [screen, setScreen] = React.useState(false);
  const changeScreen = () => setScreen( !screen );
  return (
    <React.Fragment>
      <Header toggle={{screen, changeScreen}} />

      { screen &&  <Board tsuser={+new Date()} /> }
      { !screen && <Register /> }
      
      <GlobalStyle />
    </React.Fragment>
  );
}

export default Application;
