import styled from 'styled-components';
import colors from '../../tokens/colors'

export const Menu = styled.header`
  background-color: ${colors.colorWhite};
  padding: 30px;
  gap: 5px;
  display: flex;
  align-items: center; 
`

export const Logo = styled.img`
`;

export const TextLogo = styled.p`
  font-size: 20px;
`

export const TextStrong = styled.span`
  font-weight: bold;
`