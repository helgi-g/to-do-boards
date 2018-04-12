import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import Menu from './Menu'
import Board from './Board'

export default function App() {
  return (
  <div className='app'>
      <Menu />
      <Board />
  </div>  
  )
}