import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  AppContainer,
  FormContainer,
  InputContainer,
  LoginLogo,
  InputLabel,
  UserInput,
  CheckBoxContainer,
  CheckBox,
  ShowPassword,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = `https://apis.ccbp.in/login`
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowpassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <UserInput
          type={inputType}
          id="password"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="checkbox"
            onChange={this.onChangeShowpassword}
          />
          <ShowPassword htmlFor="checkbox">Show Password</ShowPassword>
        </CheckBoxContainer>
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <UserInput
          type="text"
          id="username"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <InputContainer>{this.renderUsernameField()}</InputContainer>
          <InputContainer>{this.renderPasswordField()}</InputContainer>
          <LoginButton type="submit">Login</LoginButton>
          {showSubmitError && <ErrorMessage>* {errorMsg}</ErrorMessage>}
        </FormContainer>
      </AppContainer>
    )
  }
}

export default Login
