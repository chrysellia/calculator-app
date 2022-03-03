import React from 'react'
import './Title.style.scss'

const Title = () => {
  return (
    <div className="title-component">
        <div className="title-content">
            <div className="title-text">calc</div>
            <div className="theme-content">
                <div className="theme-title">THEME</div>
                {/* <div className="toggle-number">
                    <div className="number-list">
                        <div className="number-item">1</div>
                        <div className="number-item">2</div>
                        <div className="number-item">3</div>
                    </div>
                    <div className="toggle-block">hello</div>
                </div> */}
            </div>
        </div>
        <div className="block-number">
            <div className="block-content">678,90</div>
        </div>
    </div>
  )
}

export default Title