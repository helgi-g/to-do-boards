import { combineReducers } from 'redux'
import {
  ADD_BOARD,
  SELECT_BOARD,
  DELETE_BOARD,
  ADD_LIST,
  DELETE_LIST,
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM
} from '../constants'

let boards = (state = [], action) => {
  const { type, name, id, selectId, deleteId, boardId, listName, listId, itemId } = action
  switch (type) {
    case ADD_BOARD:
      return [
        ...state,
        {
          id,
          name,
          lists: []
        }
      ]
    
    case SELECT_BOARD:
      return state.map(board => {
        return board.id == selectId ? { ...board, select: true } : { ...board, select: false }
      })
    
    case DELETE_BOARD:
      return state.filter(board => {
        return board.id != deleteId
      })
    
    case ADD_LIST:
      return state.map(board => {
        if (board.id == boardId) {
          board.lists = [...board.lists, { id, name: listName, items: [] }]
        }
        return board
      })
    
    case DELETE_LIST:
      return state.map(board => {
        if (board.id == boardId) {
          board.lists = board.lists.filter(list => list.id != listId)
        }
        return board
      })
    
    case ADD_ITEM:
      return state.map(board => {
        if (board.id == boardId) {
          board.lists = board.lists.map(list => {
            if (list.id == listId) {
              list.items = [...list.items, {id, name, done: false}]
            }
            return list
          })
        }
        return board
      })
    
    case DELETE_ITEM:
      return state.map(board => {
        if (board.id == boardId) {
          board.lists = board.lists.map(list => {
            if (list.id == listId) {
              list.items = list.items.filter(item => item.id != itemId)
            }
            return list
          })
        }
        return board
      })
    
    case TOGGLE_ITEM:
      return state.map(board => {
        if (board.id == boardId) {
          board.lists = board.lists.map(list => {
            if (list.id == listId) {
              list.items = list.items.map(item => {
                if (item.id == itemId) item.done = !item.done
                return item
              })
            }
            return list
          })
        }
        return board
      })
  }
  return state
}

export default combineReducers({
  boards
})
