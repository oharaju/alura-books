import styled from 'styled-components';
import colors from '../../tokens/colors';

export const Hero = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  color: ${colors.colorWhite};
  height: 100vh;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: #FFF;
  font-size: 36px;
  margin-bottom: 30px;
`

export const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`