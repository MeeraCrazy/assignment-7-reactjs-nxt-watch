import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  FilureViewContainer,
  FailureImage,
  FailureHeading,
  FailureNote,
  RetryButton,
} from './styledComponents'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failurImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FilureViewContainer>
            <FailureImage src={failurImageUrl} alt="failure view" />
            <FailureHeading headingColor={headingColor}>
              Ooops! Something Went Wrong
            </FailureHeading>
            <FailureNote noteColor={noteColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailureNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FilureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
