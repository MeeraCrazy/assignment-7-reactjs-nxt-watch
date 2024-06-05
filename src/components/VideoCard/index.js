import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  TrendingListItem,
  TrendingVideoDetails,
  TrendingThumbnailImage,
  TrandingProfileImage,
  TrendingContentSection,
  TrendingTitle,
  TrendingChannelName,
  TrendingVideosAndDate,
  TrendingDot,
  TrendingLink,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    publishedAt,
    viewCount,
    name,
    profileImageUrl,
  } = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const channelColor = isDarkTheme ? '#3b82f6' : '#94a3b8'

        return (
          <TrendingLink to={`/videos/${id}`}>
            <TrendingListItem>
              <TrendingThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
              />
              <TrendingVideoDetails>
                <TrandingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingContentSection>
                  <TrendingTitle color={textColor}>{title}</TrendingTitle>
                  <TrendingChannelName channelColor={channelColor}>
                    {name}
                  </TrendingChannelName>
                  <TrendingVideosAndDate channelColor={channelColor}>
                    {viewCount} <TrendingDot> &#8226; </TrendingDot>
                    {publishedAt}
                  </TrendingVideosAndDate>
                </TrendingContentSection>
              </TrendingVideoDetails>
            </TrendingListItem>
          </TrendingLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCard
