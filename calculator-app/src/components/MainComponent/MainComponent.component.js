import React from 'react'
import './MainComponent.style.scss'
import Title from '../Title/Title.component'
import Keyboard from '../Keyboard/Keyboard.component'

const MainComponent = () => {
  return (
    <div className="main-component">
        <Title/>
        <Keyboard/>
    </div>
  )
}

export default MainComponent