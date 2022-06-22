import React, { Component } from 'react'
import logo from '../logo.svg'

type Props = {}

type State = {}

export default class TopBar extends Component<Props, State> {
  state = {}

  render() {
    return (
        <div className='topbar'>
            <div className="title">
                <img className='App-logo' src={logo} /> Alvian's Porfolio
                <span className="subtitle"> on Typescript</span>
            </div>
            <div className="navs">
                <a className="nav-item" href="#basic-info">
                <i className="fa-solid fa-user-secret"></i>
                    Basic Info
                </a>
                <div className="nav-item">
                <i className="fa-solid fa-code"></i>
                    Technologies
                </div>
                <div className="nav-item hire-me">
                <i className="fa-solid fa-thumbs-up"></i>
                    Hire Me!
                </div>
            </div>
        </div>
    )
  }
}