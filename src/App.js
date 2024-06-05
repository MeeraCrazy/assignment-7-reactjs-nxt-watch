import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoDetailsView from './components/VideoDetailsView'
import Gaming from './components/Gaming'
import SavedVideo from './components/SavedVideo'
import ProductedRoute from './components/ProductedRoute'
import NotFound from './components/NotFound'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTap: 'Home',
  }

  changeTap = tap => {
    this.setState({activeTap: tap})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state

    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)

    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideo = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideo})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTap} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTap,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTap: this.changeTap,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProductedRoute exact path="/" component={Home} />
          <ProductedRoute exact path="/trending" component={Trending} />
          <ProductedRoute exact path="/gaming" component={Gaming} />
          <ProductedRoute
            exact
            path="/videos/:id"
            component={VideoDetailsView}
          />
          <ProductedRoute exact path="/saved-videos" component={SavedVideo} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
