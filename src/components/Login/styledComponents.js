import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    width: 350px;
    max-width: 1140px;
    box-shadow: 0 8px 40px rgba(7, 7, 7, 0.08)
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
  }
`
export const LoginLogo = styled.img`
  width: 100px;
  align-self: center;
  margin-bottom: 10px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
`
export const InputLabel = styled.label`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
`
export const UserInput = styled.input`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  border: 1px solid #94a3b8;
  padding: 0px;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
  padding-top: 16px;
  padding-left: 8px;
  padding-bottom: 16px;
  padding-right: 8px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`
export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 20px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 3px;
  align-self: flex-start;
  line-height: 1.6;
`
