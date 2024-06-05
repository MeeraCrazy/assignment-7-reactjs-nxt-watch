import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`
export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: ${props => props.titleAndIconBgColor};
  @media screen and (min-width: 768px) {
    height: 20vh;
    width: 100%;
    margin-bottom: 20px;
  }
`
export const GamingTitleIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 80px;
  background-color: ${props => props.iconBgColor};
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
    width: 80px;
    height: 80px;
  }
`

export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const GamingVideoList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
