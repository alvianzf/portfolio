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
                <div className="nav-item">
                    Basic Info
                </div>
                <div className="nav-item">
                    Portfolios
                </div>
                <div className="nav-item">
                    Hire Me!
                </div>
            </div>
        </div>
    )
  }
}