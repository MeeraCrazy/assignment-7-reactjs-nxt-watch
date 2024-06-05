import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import HomeVideoCard from '../HomeVideoCard'

import {
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Serach results found
            </NoVideosHeading>
            <NoVideosNote noteColor={noteColor}>
              Try different keywords or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry()}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideos
