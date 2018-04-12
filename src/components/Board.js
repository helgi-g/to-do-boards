import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../AC/boardAC'
import List from './List'

function Board({ boards, addList }) {
  let input
  return (
    <div className='board'>
      {boards.map(board => board.select ?
        <div key={board.id}>  
          <h1 className='board_name'>{board.name}</h1>
          {
            board.lists.map(list => <List key={list.id} list={list} boardId={board.id} />)
          }
          <form className='board_form' onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            addList(board.id, input.value)
            input.value = ''
          }}>
            <input className='board_formInput' type='text' ref={node => input = node} />
            <button className='board_formButton' type="submit">
              Add List
            </button>
          </form>
        </div>
        : '')
      }
    </div>
  )
}

export default connect(state => {
  return {
    boards: state.boards
  }
}, { addList })(Board)