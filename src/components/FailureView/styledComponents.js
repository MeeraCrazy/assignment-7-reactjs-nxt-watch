import styled from 'styled-components'

export const FilureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  color: ${props => props.headingColor};
  text-align: center;
`

export const FailureNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  border-radius: 5px;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`
