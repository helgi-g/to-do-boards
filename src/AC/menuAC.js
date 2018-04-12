import {
  ADD_BOARD,
  SELECT_BOARD,
  DELETE_BOARD
} from '../constants'

export function addBoard(name) {
  return {
    type: ADD_BOARD,
    name,
    generateId: true
  }
}

export function selectBoard(selectId) {
  return {
    type: SELECT_BOARD,
    selectId
  }
}

export function deleteBoard(deleteId) {
  return {
    type: DELETE_BOARD,
    deleteId
  }
}