import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  over-flow: auto;
  @media screen and (min-width: 768px) {
    margin-left: 260px;
    margin-bottom: 0;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  justify-content: space-between;
  height: 280px;
  width: 100%;
  padding: 20px;
  display: ${props => props.display};
`
export const BannerLeftPart = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const BannerRightPart = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const BannerImage = styled.img`
  width: 138px;
  height: 38px;
`
export const BannerButton = styled.button`
  background: none;
  color: #00306e;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
  border: 1px solid #000000;
  height: 40px;
  width: 140px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
`

export const BannerText = styled.p`
  color: #00306e;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const BannerCloseButton = styled.button`
  border: none;
  background: none;
  height: 25px;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  width: 60%;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  border-left: 1px solid #909090;
  width: 70px;
  border-right: none;
  border-top: none;
  border-bottom: none;
`

export const SearchInput = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 130%;
  font-family: 'Roboto';
  color: ${props => props.color};
  padding: 5px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
