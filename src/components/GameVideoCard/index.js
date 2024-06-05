import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbnailImage,
  GamingContentSection,
  GamingTitle,
  GamingVideosAndDate,
} from './styledComponents'

const GameVideoCard = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const watchingColor = isDarkTheme ? '#4f46e5' : '#475569'

        return (
          <ItemLink to={`/videos/${id}`}>
            <GamingListItem>
              <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingVideosAndDate watchingColor={watchingColor}>
                  {viewCount} watching Worldwide
                </GamingVideosAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default GameVideoCard
