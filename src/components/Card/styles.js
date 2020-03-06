import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.5);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${ props => props.isDraggind && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
  `}
`;

export const Label = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 2px;
  display: inline-block;
  background-color: ${ ({ color }) => color}
`;