import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'
import NavigationBar from '../NavigationBar'

import {
  NotFoundContainer,
  NotFoundVideosView,
  NotFoundVideoImage,
  NotFoundVideoHeading,
  NotFoundVideoNote,
} from './styledComponents'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgColor = isDarkTheme ? ' #181818' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      const notFoundIamgeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.pn'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NavigationBar />
          <NotFoundContainer bgColor={bgColor}>
            <NotFoundVideosView>
              <NotFoundVideoImage src={notFoundIamgeUrl} alt="not found" />
              <NotFoundVideoHeading headingColor={headingColor}>
                Page Not Found
              </NotFoundVideoHeading>
              <NotFoundVideoNote noteColor={noteColor}>
                We are sorry, the page you requested could not be found
              </NotFoundVideoNote>
            </NotFoundVideosView>
          </NotFoundContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
