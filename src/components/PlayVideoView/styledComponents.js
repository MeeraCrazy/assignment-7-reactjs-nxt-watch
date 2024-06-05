import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 40px;
  margin: 20px;
`

export const PlayVideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.color};
`
export const PlayVideoStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const PalyVideoStatus = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.channelColor};
`

export const PlayVideoDot = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
  margin-left: 5px;
`

export const PlayScocilButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: flex-start;
  }
`
export const PlayVideoStatusAndScocialButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ScocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: ${props => props.color};
`

export const ButtonText = styled.span`
  margin-left: 5px;
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`

export const HrLine = styled.hr`
  border: 1px solid #909090;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin-right: 20px;
  margin-top: 20px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color};
`
export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.channelColor};
`

export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.channelColor};
`

export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
