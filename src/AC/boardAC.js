import {
  ADD_LIST,
  DELETE_LIST
} from '../constants'

export function addList(boardId, listName) {
  return {
    type: ADD_LIST,
    boardId,
    listName,
    generateId: true
  }
}
