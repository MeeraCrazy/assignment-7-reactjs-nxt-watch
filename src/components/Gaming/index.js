import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import FailureView from '../FailureView'
import NavigationBar from '../NavigationBar'
import GameVideoCard from '../GameVideoCard'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  GamingContainer,
  GamingVideoTitle,
  GamingTitleIconContainer,
  GamingText,
  GamingVideoList,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGameVideo()
  }

  getGameVideo = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onRetry = () => {
    this.getGameVideo()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideoGame => (
          <GameVideoCard key={eachVideoGame.id} videoDetails={eachVideoGame} />
        ))}
      </GamingVideoList>
    )
  }

  renderGamingVideoView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
          const titleAndIconBgColor = isDarkTheme ? '#212121' : '#f1f1f1'
          const iconBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'

          return (
            <div>
              <Header />
              <NavigationBar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <GamingVideoTitle titleAndIconBgColor={titleAndIconBgColor}>
                  <GamingTitleIconContainer iconBgColor={iconBgColor}>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingTitleIconContainer>
                  <GamingText color={textColor}>Gaming</GamingText>
                </GamingVideoTitle>
                {this.renderGamingVideoView()}
              </GamingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
