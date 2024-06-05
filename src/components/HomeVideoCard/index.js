import {Link} from 'react-router-dom'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import './index.css'

import {
  ListItem,
  ThumbnailImage,
  VideoDetails,
  ProfileImage,
  ContentSection,
  Title,
  ChannelName,
  ViewsAndDate,
  Dot,
} from './styledComponents'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    viewCount,
    thumbNailUrl,
    publishedAt,
    name,
    profileImageUrl,
  } = video

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const viewColor = isDarkTheme ? '#4f46e5' : '#475569'

        return (
          <Link to={`/videos/${id}`} className="link">
            <ListItem>
              <ThumbnailImage src={thumbNailUrl} alt="video thumbnail" />
              <VideoDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName viewColor={viewColor}>{name}</ChannelName>
                  <ViewsAndDate viewColor={viewColor}>
                    {viewCount} views <Dot> &#8226; </Dot> {publishedAt}
                  </ViewsAndDate>
                </ContentSection>
              </VideoDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideoCard
