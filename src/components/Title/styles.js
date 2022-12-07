import styled from "styled-components";

export const Title = styled.h2`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.size || '30px'};
  font-weight: 500;
  background-color: #FFF;
  text-align: ${props => props.align || 'center'};
  padding: ${props => props.spacing || '20px'};
  margin-bottom: 4rem;
`