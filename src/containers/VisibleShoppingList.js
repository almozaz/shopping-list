import { connect } from 'react-redux'
import { toggleItem } from '../actions'
import ShoppingList from '../components/ShoppingList'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => {
      dispatch(toggleItem(id))
    }
  }
}

const VisibleShoppingList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList)

export default VisibleShoppingList
