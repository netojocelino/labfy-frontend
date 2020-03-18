import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 30px 0;
    height: calc(100% - 80px);
`;

export const FormButton = styled.button`
    min-width: 125px;
    height: 28px;
    border-color: rgba(113,89,193,1);
    outline-color: white;
    background-color: rgba(81, 46, 197, 1);
    color: white;
    cursor: pointer;

    ${ ({ children }) => children.toLowerCase() === "cancelar" && css`
        margin-left: 33px;
        font-weight: bold;
        color: rgba(81, 46, 197, 1);
        border-color: rgba(81, 46, 197, 1);
        background-color: rgba(199, 151, 239, 0.8);
    ` }
`;

export const Color = styled.div`
    float: right;
    margin-right: 4px;
    height: 22px;
    width: 23px;
    background-color: ${ ({ color }) => color };
    border: 1px solid rgba(255, 255, 255, 0.6);
    box-shadow: 1px 0px 2px #ccc;
    display: inline-block;
`;

const BoardStyle = {
    Container,
    FormButton,
    Color
};

export default BoardStyle;