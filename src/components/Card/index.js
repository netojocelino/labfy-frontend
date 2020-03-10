import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);
  
  const [{ isDragging }, dragRef ] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  
  const [, dropRef] = useDrop({
	  accept: 'CARD',
	  hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;
		  
      const draggedIndex = item.index;
      const targetIndex  = index;
      
      if( draggedIndex === targetIndex && draggedListIndex === targetListIndex ) {
        return;
      }
      
      const targetSize = ref.current.getBoundingClientRect(); // pega o tamanho do card 
      const targetCenter = (targetSize.bottom - targetSize.top) / 2; // pega a metade da altura do card
      
      const draggedOffset = monitor.getClientOffset(); // pega o quanto o item foi arrastado
      
      const draggedTop = draggedOffset.y - targetSize.top; // retorna a distância do top da tela - item do topo da tela
      
      // console.log(item.index, index, targetCenter, draggedOffset);
      if( draggedIndex < targetIndex && draggedTop < targetCenter ) {
        return;
      }
      
      if( draggedIndex > targetIndex && draggedTop > targetCenter ) {
        return;
      }
      
      move( draggedListIndex, targetListIndex, draggedIndex, targetIndex );
      
      item.index = targetIndex;
      item.listIndex = targetListIndex;
      
	  }
  });

  dragRef(dropRef(ref));
  
  return (
    <Container name="Card" ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map( label => <Label key={label} color={label} />)}
      </header>
      <p>{ data.content }</p>
      {data.user && <img src={ data.user } alt="" />}
    </Container>
    );
}
