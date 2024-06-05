import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const TrendingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  background: none;
  margin: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding-left: 40px;
  }
`

export const TrendingThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const TrendingVideoDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TrandingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TrendingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-right: 40px;
  }
`

export const TrendingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.color};
`
export const TrendingChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.channelColor};
`
export const TrendingVideosAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => props.channelColor};
`
export const TrendingDot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
`
export const TrendingLink = styled(Link)`
  text-decoration: none;
`
