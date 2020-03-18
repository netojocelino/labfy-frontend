import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import BoardStyle from './styles';
import List from '../List'
import BoardContext from '../../context'

export default function Board({ tsuser }) {
  const [lists, setLists] = useState([]);

  async function loading(){
    let response;
    try{
      response = await api.get('/');
      const cards = response.data;
      const newCards = [
        { title: 'TODO', cards: cards.filter( card => card.list_state === 'TODO') },
        { title: 'DOING', cards: cards.filter( card => card.list_state === 'DOING') },
        { title: 'DONE', cards: cards.filter( card => card.list_state === 'DONE') },
        { title: 'FRIDGE', cards: cards.filter( card => card.list_state === 'FRIDGE') }
      ];
  
      setLists(newCards);
    }catch{
      //setData("request", "wrong");
    }
  }

  useEffect(function(){
    loading();
  }, []);

  async function move(cardId, newState, newData = {}) {
    let response, card;
    switch( newState.toString().toLowerCase() ) {
      case 'delete':
        response = await api.delete(`/${cardId}`);
        card = response.data;
        break;
      case 'post':
          response = await api.post(`/`, newData);
          card = response.data;
        break;
      case 'xdelete':
        response = await api.put(`/${cardId}`);
        card = response.data;
        break;
      default:
        break;
    }
    loading();
    return card;
  }
  
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <BoardStyle.Container>
          { lists.map((list, index) => 
            {
              return (<List data={list} key={index} />);
            }
          )
          }
      </BoardStyle.Container>
    </BoardContext.Provider>
  );
}
