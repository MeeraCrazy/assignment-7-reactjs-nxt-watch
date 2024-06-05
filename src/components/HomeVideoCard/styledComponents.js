import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 138px;
  background: none;
  @media screen and (min-width: 768px) {
    width: 320px;
    margin-right: 20px;
    margin-top: 20px;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
  margin-top: 20px;
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  margin: 0;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.3;
  color: ${props => props.color};
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.viewColor};
`
export const ViewsAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.viewColor};
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
