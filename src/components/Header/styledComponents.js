import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 135px;
    height: 40px;
  }
`
export const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 15px;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 15px;
  border-radius: 5px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  border-color: ${props => props.color};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent:
  border: 1px solid grey;
  border-radius: 2px;
  padding: 8px;
  padding-left: 12px; 
  padding-right: 12px;
  margin: 12px;
  color: grey;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-left: 20px; 
    padding-right: 20px;
  }
`
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 6px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 12px;
  color: white;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  align-self: flex-end;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const Modaldescription = styled.p`
  color: black;
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`
