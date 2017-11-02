import { combineReducers } from 'redux'
import items from './items'
import visibilityFilter from './visibilityFilter'

const shoppingListApp = combineReducers({
  items,
  visibilityFilter
})

export default shoppingListApp
