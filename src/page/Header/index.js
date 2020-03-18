import React from 'react';

import { Container, Toggle } from './styles';

export default function Header({ toggle }) {
    return (
        <Container name="Header">
            <h1>Labfy - Ana</h1>
            <Toggle onClick={toggle.changeScreen}>Mudar de tela { toggle.screen ? 'Formulário' : 'Quadro' }</Toggle>
        </Container>
    );
}