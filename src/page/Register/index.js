import React, { useState, useEffect } from 'react';

import RegisterStyle from './style'

import api from '../../services/api';

export default function Register({ tsuser }) {
    const [info, setInformation] = React.useState({
        title: '',
        content: '',
        label: '',
        created_by: ''
    });

    const [proccess, setProccess] = React.useState('');

    const labels = ['#7159c1', '#54e1f7', '#3c8dbc'];
    const message = {
        wait: { type: 'wait', message: 'Aguarde enquanto os dados são processados..' },
        error: { type: 'error', message: 'Os dadosnão foram processados :(' },
        success: { type: 'success', message: 'Os dados foram processados :D' },
    };

    const setInfo = (event) => {
        const {name, value} = event.target;
        const newInfo = { ...info };
        newInfo[name] = value;
        setInformation(newInfo);
    };

    const handlerSend = (ev) => {
        ev.preventDefault();
        if(info.title === '' || info.content === '' || info.label === '' || info.created_by == '') {
            return false;
        }
        setProccess('wait');

        async function post(data) {
            try {
                const request = await api.post('/', data);
                const card = request.data;
                setProccess("success");
            } catch (error) {
                setProccess('error');
            }finally{
                setTimeout(() => setProccess(''), 1000);

            }
        }

        console.log(info);
    };
  
    return (<React.Fragment>
        <RegisterStyle.Form>
            <RegisterStyle.Message type={proccess}>
                {message[proccess]}
            </RegisterStyle.Message>
            <fieldset>
                <label>Nome da Solicitação</label>
                <input type="text" value={info.title} name="title" onChange={setInfo} />
            </fieldset>
            <fieldset>
                <label>Descrição da solicitação</label>
                <textarea value={info.content} name="content"
                    onChange={setInfo} maxLength="255"
                    rows="3"
                    ></textarea>
            </fieldset>
            <fieldset>
                <label>Label</label>
                <RegisterStyle.SelectColor value={info.label} name="label" onChange={setInfo}>
                    <option value="">Selecione uma cor</option>
                    {labels.map( label =>
                        <option value={label}>{label}</option>
                    )}
                </RegisterStyle.SelectColor>
            </fieldset>
            <fieldset>
                <label>Solicitante</label>
                <input type="text" value={info.created_by} name="created_by" onChange={setInfo} />
            </fieldset>
            <button onClick={ handlerSend }>Registrar</button>
        </RegisterStyle.Form>
    </React.Fragment>)
};