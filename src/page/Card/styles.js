import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #FFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.5);
  // cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
    width: 260px;
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

  ${ props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
	border-radius: 0;
	background-color: transparent;
	box-shadow: none;
	cursor: grabbing;
	
	p, img, header {
		opacity: 0;
	}
  `}
`;

export const Label = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 2px;
  display: inline-block;
  background-color: ${ ({ color }) => color}
`;

/*

&:after {
  position: absolute;
  content: "${({ tooltip }) => tooltip}";
  width: 200px;
  margin-left: 15px;
  margin-top: -4px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 5px;
}

*/


const Icon = styled.button`
  height: 20px !important;
  width: 20px !important;
  padding-top: 2px;
  position: absolute;
  right: ${ ({ right = 0 }) => right}px;
  animation: 1s linear all;

  ${ props => props.title && css`
  &:hover{
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    z-index: 150;
    text-transform: capitalize;
  }

  &:hover:before{
    opacity: 1;
    width: max-content;
    right: 12px;
    padding: 2px 17px 2px 4px;
    border-radius: 5px 0 0 5px;
    margin: -2px 2px 0 0;
    height: 16px;
  }
  &:before{
    position: absolute;
    width: 0;
    background-color: #5b3bfd;
    content: "${ ({ title }) => title }";
    color: white;
    opacity: 0;
  }
  `}

`;


const Tooltip = styled.button`
  width: 150px;
  background-color: black;
  content: "${props => props.title }";
  left: 0;
  color: white;
  padding: 2px 4px;
  border-radius: 5px 0 0 5px;
`;

const Owner = styled.small`
  color: #ccc;
  font-weight: bold;
`

const CardStyle = {
 Container,
 Label,
 Icon,
 Tooltip,
 Owner
};

export default CardStyle;