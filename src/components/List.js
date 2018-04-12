import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteList, addItem, deleteItem, toggleItem } from '../AC/listAC'

function List({ list, boardId, deleteList, addItem, deleteItem, toggleItem }) {
  let input
  return (
    <div className='list'>
      <h3 className='list_name'>{list.name}</h3>
      <button className='list_deleteButton' onClick={e => {
        e.preventDefault()
        deleteList(boardId, list.id)
      }}>X</button>
      <ul>
        {list.items.map(item => <li className='list_itemWrapper' key={item.id}>
         
          <button className={item.done ? 'done list_item' : 'list_item'} onClick={e => {
            e.preventDefault()
            toggleItem(boardId, list.id, item.id)
          }}>{item.name}</button>

          <button className='list_itemDeleteButton' onClick={e => {
            e.preventDefault()
            deleteItem(boardId, list.id, item.id)
          }}>X</button>
        </li>)}
      </ul>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addItem(boardId, list.id, input.value)
        input.value = ''
      }}>
        <input className='list_formInput' type='text' ref={node => input = node} />
        <button className='list_formButton' type="submit">
          Add Item
        </button>
      </form>
    </div>
  )
}

export default connect(state => {
  return {
    boards: state.boards
  }
}, { deleteList, addItem, deleteItem, toggleItem })(List)