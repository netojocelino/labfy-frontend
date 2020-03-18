import React from 'react';

import { MdAdd } from 'react-icons/md'

import Card from '../Card';

import ListStyle from './styles';


export default function List({ data, handlerModal }) {
  return (
    <ListStyle.Container done={data.title === "DONE" || data.title === "FRIDGE"}>
      <header>
        <h2>{ data.title }</h2>

        { data.title==="TODO" && (
          <button type="button" onClick={handlerModal}>
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(function (card, index) {
          
              const action = { title: "Mover para a direita", callback: () => console.log('movendo...') };
              action.title = card.list_state === "DONE" ? "Arquivar" : card.list_state === "FRIDGE" ? "Desarquivar" : action.title;
              
              card = { action, ...card };


              return (<Card data={ card } key={ index } />);
          }
        )
        }
      </ul>
    </ListStyle.Container>
  );
}
