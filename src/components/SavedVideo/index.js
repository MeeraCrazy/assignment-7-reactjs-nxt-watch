import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'

import {
  SavedContainer,
  SavedVideoTitle,
  SavedTitleIconContainer,
  SavedText,
  SavedVideoList,
  NoSavedVideosView,
  NoSavedVideoImages,
  NoSavedVideoHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideo = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value

      const bgColor = isDarkTheme ? '#231f20' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <NavigationBar />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <SavedVideoList>
                {savedVideos.map(eachVideo => (
                  <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
                ))}
              </SavedVideoList>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideoImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideoHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideoHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideo
