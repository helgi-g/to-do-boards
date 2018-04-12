import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBoard, selectBoard, deleteBoard } from '../AC/menuAC'

function Menu({ boards, addBoard, selectBoard, deleteBoard }) {
  let input
  return (
    <div className='menu'>
      <h1 className='menu_name'>Menu</h1>
      <ul>
        {boards.map(board => <li key={board.id} className='menuItem'>
          
          <button className='menuItem_button' onClick={e => {
            e.preventDefault()
            selectBoard(board.id)
          }}>{board.name}</button>

          <button className='menuItem_deleteButton' onClick={e => {
            e.preventDefault()
            deleteBoard(board.id)
          }}>X</button>
        </li>)}
      </ul>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addBoard(input.value)
        input.value = ''
      }}>
        <input className='menu_formInput' type='text' ref={node => input = node} />
        <button className='menu_formButton' type="submit">
          Add Board
        </button>
      </form>
    </div>
  )
}

export default connect(state => {
  return {
    boards: state.boards
  }
}, { addBoard, selectBoard, deleteBoard })(Menu)