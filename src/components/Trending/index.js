import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import VideoCard from '../VideoCard'

import './index.css'

import {
  TrendingContainer,
  TrendingVideoTitle,
  TrendingIconContainer,
  TrendingVideoText,
  TrendingVideoList,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        title: eachVideo.title,
        publishedAt: eachVideo.published_at,
        viewCount: eachVideo.view_count,
        thumbnailUrl: eachVideo.thumbnail_url,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderVideoView = () => {
    const {trendingVideos} = this.state

    return (
      <TrendingVideoList>
        {trendingVideos.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TrendingVideoList>
    )
  }

  renderTrendingVideos = () => {
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
          const {isDarkTheme, toggleTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
          const titleAndIconBgColor = isDarkTheme ? '#212121' : '#f1f1f1'
          const iconBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'

          return (
            <div data-testid="trending" className="trending-container">
              <Header />
              <NavigationBar />
              <TrendingContainer
                data-testid="trending"
                style={{backgroundColor: bgColor}}
                onClick={toggleTheme}
              >
                <TrendingVideoTitle titleAndIconBgColor={titleAndIconBgColor}>
                  <TrendingIconContainer iconBgColor={iconBgColor}>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingIconContainer>
                  <TrendingVideoText color={textColor}>
                    Trending
                  </TrendingVideoText>
                </TrendingVideoTitle>
                {this.renderTrendingVideos()}
              </TrendingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
