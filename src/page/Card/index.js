import React, { useContext } from 'react';

import { MdArchive, MdKeyboardArrowRight } from 'react-icons/md';

import CardStyle from './styles'

import BoardContext from '../../context';

export default function Card ({ data }) {

    const { move } = React.useContext(BoardContext);

    const state = {
        todo: '',
        doing: '',
        done: ''
    };
    
    const fridge_state = data.list_state.toLowerCase() === 'fridge';
    return (
    <CardStyle.Container name="Card">
        <header>
            <CardStyle.Label key={data.label} color={data.label} />
            { data.list_state.toLowerCase() !== 'done' && data.list_state.toLowerCase() !== 'fridge' && 
                <CardStyle.Icon onClick={ () => move(data.card_id, 'NexT') } title={data.action.title}>
                <MdKeyboardArrowRight size={17} color="#ccc" />
            </CardStyle.Icon>}
            { !fridge_state &&
                <CardStyle.Icon onClick={ () => move(data.card_id, fridge_state ? "back" : "delete") }
                    title='Arquivar' right={26}>
                    <MdArchive size={17} color="#ccc" />
                </CardStyle.Icon>
            }
        </header>
        <h4>{data.title}</h4>
        <p>{ data.content }</p>
        <CardStyle.Owner>Solicitado por { data.created_by}</CardStyle.Owner>
        {data.user && <img src={ data.user } alt="" />}
    </CardStyle.Container>
    );
}