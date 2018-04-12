import {
  DELETE_LIST,
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM
} from '../constants'

export function deleteList(boardId, listId) {
  return {
    type: DELETE_LIST,
    boardId,
    listId
  }
}

export function addItem(boardId, listId, name) {
  return {
    type: ADD_ITEM,
    boardId,
    listId,
    name,
    generateId: true
  }
}

export function deleteItem(boardId, listId, itemId) {
  return {
    type: DELETE_ITEM,
    boardId,
    listId,
    itemId
  }
}

export function toggleItem(boardId, listId, itemId) {
  return {
    type: TOGGLE_ITEM,
    boardId,
    listId,
    itemId
  }
}
