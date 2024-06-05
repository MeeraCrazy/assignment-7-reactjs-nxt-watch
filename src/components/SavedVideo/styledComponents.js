import styled from 'styled-components'

export const SavedContainer = styled.div`
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
export const SavedVideoTitle = styled.div`
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

export const SavedTitleIconContainer = styled.div`
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
export const SavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const SavedVideoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const NoSavedVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoSavedVideoImages = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoSavedVideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NoSavedVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
