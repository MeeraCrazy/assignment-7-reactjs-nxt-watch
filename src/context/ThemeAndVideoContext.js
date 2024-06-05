import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTap: 'Home',
  toggleTheme: () => {},
  changeTap: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
