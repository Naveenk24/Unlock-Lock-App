// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161617;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockImage = styled.img`
  height: 120px;
  width: 110px;
`

export const DisplayText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
`

export const ToggleUnlockButton = styled.button`
  margin-top: 40px;
  color: #ffffff;
  background-color: #06b6d4;
  border-radius: 8px;
  border: none;
  padding: 7px;
  width: 150px;

  @media screen and (max-width) {
    margin-top: 50px;
  }
`
