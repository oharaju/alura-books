import styled from 'styled-components';
import colors from '../../tokens/colors'

export const Menu = styled.header`
  background-color: ${colors.colorWhite};
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const TextLogo = styled.p`
  font-size: 30px;
`

export const TextStrong = styled.span`
  font-weight: bold;
`

export const DivList = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
`

export const ListMenu = styled.ul`
  display: flex;
  gap: 20px;
`

export const ItemList = styled.li`
  display: flex;
  gap: 10px;
  white-space: nowrap;
`

export const Link = styled.a`
  color: ${colors.colorBlack};
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
`

export const DivIcons = styled.div`
  display: flex;
  gap: 30px;
`