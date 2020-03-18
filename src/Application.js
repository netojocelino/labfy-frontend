import React from 'react';

import GlobalStyle from './page/styles/global';
import Header from './page/Header'
import Board from './page/Board';


function Application() {
  return (
    <React.Fragment>
      <Header />

      <Board tsuser={+new Date()} />
      
      <GlobalStyle />
    </React.Fragment>
  );
}

export default Application;
