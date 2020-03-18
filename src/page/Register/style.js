import styled, { css } from 'styled-components';

export const Form = styled.form`
    display: block;
    position: absolute;
    width: 400px;
    height: 340px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #7159c1;
    padding: 5px;
    border-radius: 5px;

    margin auto;

    fieldset {
        width: 100%;
        border: 0;
    }

    fieldset input,
    fieldset textarea,
    fieldset select
     {
        width: 100%;
        margin-bottom: 15px;
        resize: none;
        line-height: 15px;
        font-size: 15px;
        padding: 5px;
        border-radius: 3px;
        border: 1px solid #ccc;
    }

    fieldset label {
        color: white;
        font-weight: bold;
    }

    button {
        padding: 2px 5px;
        border: 1px solid white;
        color: white;
        background-color: transparent;
    }
`;

export const SelectColor = styled.select`
    background-color: ${props => props.value};
`

export const Message = styled.legend`
    border: 1px solid;
    padding: 5px 10px;
    margin-bottom: 8px;
    font-weight: bold;
    display: none;

    ${props => props.type === "wait" && css`
        display: block;
        background-color: #e6e684;
        border-color: #adad06;
        color: black;
    `}

    ${props => props.type === "success" && css`
        display: block;
        background-color: #84e6ae;
        border-color: #06ad3b;
        color: black;
    `}

    ${props => props.type === "error" && css`
        display: block;
        background-color: #f16969;
        border-color: #ad0606;
        color: black;
    `}

`;


const RegisterStyle = {
    Form,
    SelectColor,
    Message
};

export default RegisterStyle;