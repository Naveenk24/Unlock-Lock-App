// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  LockImage,
  DisplayText,
  ToggleUnlockButton,
} from './styledComponents'

const Unlock = () => {
  const [currentState, toggleState] = useState(false)

  const toggleTheButton = () => toggleState(prevState => !prevState)

  const renderTheElement = () => {
    if (currentState) {
      return (
        <>
          <LockImage
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <DisplayText>Your Device is Unlocked </DisplayText>
          <ToggleUnlockButton type="button" onClick={toggleTheButton}>
            Lock
          </ToggleUnlockButton>
        </>
      )
    }
    return (
      <>
        <LockImage
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
        <DisplayText>Your Device is Locked</DisplayText>
        <ToggleUnlockButton type="button" onClick={toggleTheButton}>
          Unlock
        </ToggleUnlockButton>
      </>
    )
  }
  return <MainContainer>{renderTheElement()}</MainContainer>
}

export default Unlock
