import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  NavBar,
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ContactNote,
  NavigationSmallContainer,
} from './styledComponents'

class NavigationBar extends Component {
  renderTabItems = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, activeTap, changeTap} = value

        const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
        const textColor = isDarkTheme ? '#f9f9f9' : '#1e293b'
        const activeTapBg = isDarkTheme ? '#475569' : '#cbd5e1'

        const onClickTapHome = () => {
          changeTap('Home')
        }

        const onClickTapTrending = () => {
          changeTap('Trending')
        }

        const onClickTapGaming = () => {
          changeTap('Gaming')
        }

        const onClickTapSaved = () => {
          changeTap('Saved')
        }

        return (
          <NavBar>
            <NavigationLgContainer bgColor={bgColor}>
              <NavOptions>
                <NavLink to="/">
                  <NavLinkContainer
                    key="home"
                    bgColor={activeTap === 'Home' ? activeTapBg : 'none'}
                    onClick={onClickTapHome}
                  >
                    <AiFillHome
                      size={30}
                      color={activeTap === 'Home' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Home</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/trending">
                  <NavLinkContainer
                    key="trending"
                    bgColor={activeTap === 'Trending' ? activeTapBg : 'none'}
                    onClick={onClickTapTrending}
                  >
                    <HiFire
                      size={30}
                      color={activeTap === 'Trending' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Trending</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <NavLinkContainer
                    key="gaming"
                    bgColor={activeTap === 'Gaming' ? activeTapBg : 'none'}
                    onClick={onClickTapGaming}
                  >
                    <SiYoutubegaming
                      size={30}
                      color={activeTap === 'Gaming' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Gaming</NavText>
                  </NavLinkContainer>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavLinkContainer
                    key="saved"
                    bgColor={activeTap === 'Saved' ? activeTapBg : 'none'}
                    onClick={onClickTapSaved}
                  >
                    <CgPlayListAdd
                      size={30}
                      color={activeTap === 'Saved' ? '#ff0b37' : '#909090'}
                    />
                    <NavText color={textColor}>Saved Videos</NavText>
                  </NavLinkContainer>
                </NavLink>
              </NavOptions>
              <ContactInfo>
                <ContactHeading color={textColor}>Contact Us</ContactHeading>
                <ContactIcons>
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ContactImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </ContactIcons>
                <ContactNote color={textColor}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactNote>
              </ContactInfo>
            </NavigationLgContainer>
            <NavigationSmallContainer bgColor={bgColor}>
              <NavLink to="/">
                <AiFillHome
                  size={30}
                  color={activeTap === 'Home' ? '#ff0b37' : '#909090'}
                  onClick={onClickTapHome}
                />
              </NavLink>
              <NavLink to="/trending">
                <HiFire
                  size={30}
                  color={activeTap === 'Trending' ? '#ff0b37' : '#909090'}
                  onClick={onClickTapTrending}
                />
              </NavLink>
              <NavLink to="/gaming">
                <SiYoutubegaming
                  size={30}
                  color={activeTap === 'Gaming' ? '#ff0b37' : '#909090'}
                  onClick={onClickTapGaming}
                />
              </NavLink>
              <NavLink to="/saved-videos">
                <CgPlayListAdd
                  size={30}
                  color={activeTap === 'Saved' ? '#ff0b37' : '#909090'}
                  onClick={onClickTapSaved}
                />
              </NavLink>
            </NavigationSmallContainer>
          </NavBar>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return <> {this.renderTabItems()}</>
  }
}

export default NavigationBar
