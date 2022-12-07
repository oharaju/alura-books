import styled from "styled-components";

export const Card = styled.div`
  align-items: center;
  background-color: #FFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;  
`

export const Subtitle = styled.h4`
  color: #002F52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`

export const Description = styled.p`
  max-width: 300px;
`

export const BoxButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Button = styled.button`
  background-color: #EB9B00;
  color: #FFF;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 2px;
  font-weight: 600;
  display: block;
  text-align: center;

  &:hover {
    cursor: pointer;
    background-color: #ce8602;
  }
`