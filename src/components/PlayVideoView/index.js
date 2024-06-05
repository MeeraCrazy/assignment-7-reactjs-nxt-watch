import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatusContainer,
  PalyVideoStatus,
  PlayVideoDot,
  PlayScocilButtonContainer,
  ScocialButton,
  ButtonText,
  HrLine,
  ChannelContainer,
  ChannelImage,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisliked, clickLiked, clickDisliked} = props
  const {
    description,
    title,
    videoUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
    subscriberCount,
  } = videoDetails

  const onClickLike = () => {
    clickLiked()
  }

  const onClickDislike = () => {
    clickDisliked()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value

        const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const channelColor = isDarkTheme ? '#94a3b8' : '#475569'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const savedIconColor = isSaved ? '#2563eb' : channelColor

        const onClickSave = () => {
          addVideo(videoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>{title}</PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PalyVideoStatus channelColor={channelColor}>
                {viewCount} views <PlayVideoDot> &#8226; </PlayVideoDot>
                {publishedAt}
              </PalyVideoStatus>
              <PlayScocilButtonContainer>
                <BtnContainer>
                  <ScocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#475569'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </ScocialButton>
                  <ScocialButton
                    type="button"
                    color={isDisliked ? '#2563eb' : '#475569'}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <ButtonText>Dislike</ButtonText>
                  </ScocialButton>
                  <ScocialButton
                    type="button"
                    color={savedIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </ScocialButton>
                </BtnContainer>
              </PlayScocilButtonContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <ChannelInfo>
                <ChannelName color={textColor}>{name}</ChannelName>
                <ChannelSubscribers channelColor={channelColor}>
                  {subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription channelColor={channelColor}>
                  {description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default PlayVideoView
