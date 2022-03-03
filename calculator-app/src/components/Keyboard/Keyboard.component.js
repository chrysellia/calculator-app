import React from 'react'
import './Keyboard.style.scss'

const Keyboard = () => {
  return (
    <div className="keyboard-component">
        <div className="keyboard-content">
            <div className="keyboard-number">
                <div className="keyboard-item">7</div>
                <div className="keyboard-item">8</div>
                <div className="keyboard-item">9</div>
                <div className="keyboard-item-del">DEL</div>

                <div className="keyboard-item">4</div>
                <div className="keyboard-item">5</div>
                <div className="keyboard-item">6</div>
                <div className="keyboard-item">+</div>

                <div className="keyboard-item">1</div>
                <div className="keyboard-item">2</div>
                <div className="keyboard-item">3</div>
                <div className="keyboard-item">-</div>

                <div className="keyboard-item">.</div>
                <div className="keyboard-item">0</div>
                <div className="keyboard-item">/</div>
                <div className="keyboard-item">x</div>

                <div className="reset-button">RESET</div>
                <div className="equal-button">=</div>
            </div>
        </div>
    </div>
  )
}

export default Keyboard