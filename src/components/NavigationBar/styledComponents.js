import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 92%;
  margin-top: 40px;
  position: fixed;
  top: 60px;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.bgColor};
  width: 100%;
  cursor: pointer;
  padding-left: 20px;
`
export const NavText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 15px;
  color: ${props => props.color};
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactHeading = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  margin-right: 10px;
`

export const ContactNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color};
`

export const NavigationSmallContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  bottom: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
