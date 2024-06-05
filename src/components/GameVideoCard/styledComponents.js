import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: none;
  margin-bottom: 50px;
`

export const GamingThumbnailImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-right: 20px;
  }
`
export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 0;
`

export const GamingVideosAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.watchingColor};
  margin-bottom: 0;
`
