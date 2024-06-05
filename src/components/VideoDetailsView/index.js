import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import FailureView from '../FailureView'
import PlayVideoView from '../PlayVideoView'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {VideoDetailsViewContainer, LoaderContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FILURE',
  inProgress: 'IN_PROGRESS',
}
class VideoDetailsView extends Component {
  state = {
    videoDetails: [],
    isLiked: false,
    isDisliked: false,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    description: data.video_details.description,
    viewCount: data.video_details.view_count,
    thumbnailUrl: data.video_details.thumbnail_url,
    publishedAt: data.video_details.published_at,
    videoUrl: data.video_details.video_url,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideosDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
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

  onRetry = () => {
    this.getVideosDetails()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  clickDisliked = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderPlayVideosView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state

    return (
      <PlayVideoView
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisliked={isDisliked}
        clickLiked={this.clickLiked}
        clickDisliked={this.clickDisliked}
      />
    )
  }

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPlayVideosView()
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

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailsViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderPlayVideosView()}
              </VideoDetailsViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoDetailsView
