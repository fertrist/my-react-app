import React from 'react'
import { Input, Menu, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByTypes, filterByName, removeAllItems, dropFilter } from '../actions'
import CartContent from './ScrollingContentModal'

const MenuExamplePointing = ({
  types,
  cart,
  priceRange,
  activeItem,
  nameSegment,
  handleMenuItemClick,
  handleSearchTyping,
  dispatchDropCart,
  dispatchDropFilters,
}) => {
    return (
      <div>
        <Menu pointing inverted>
          {
            types.map(type => (
                <Menu.Item
                  key={type}
                  name={type}
                  active={activeItem === type}
                  onClick={(e) => handleMenuItemClick(e, type)}
                />
              ))
          }
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                icon='search'
                placeholder='Search...'
                value={nameSegment}
                onChange={handleSearchTyping} />
            </Menu.Item>
            <CartContent 
            cartItems={cart}
            dispatchDropCart={dispatchDropCart}
            dispatchDropFilters={() => dispatchDropFilters(priceRange)}
            trigger={
              <Button style={{marginRight: 0}}
                    animated='vertical' 
                    secondary
                    disabled={cart.length === 0}>
                <Button.Content visible>
                    <Icon name='cart' size='big' />
                    {cartSum(cart)}
                </Button.Content>   
                <Button.Content hidden> 
                  {
                    cart.length === 0 ? 'No items' : 'Order'
                  }
                </Button.Content>    
              </Button>
            }/>
            
          </Menu.Menu>
        </Menu>
        
      </div>
    )
}

const cartSum = (cart) => {
  const sum = cart.reduce((sum, cartItem) => sum += cartItem.price, 0)
  return sum > 0 ? '$'+sum : ''
}

const getActiveItem = (types) => {
  return (types && types.length === 1) ? types[0] : 'all';
}

const mapStateToProps = state => {
  return {
    activeItem: getActiveItem(state.filter.types),
    types: state.types,
    cart: state.cart,
    priceRange : state.priceRange,
    nameSegment : state.filter.nameSegment
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleMenuItemClick : (e, type) => {
      dispatch(filterByTypes([type]))
    },
    handleSearchTyping : (e, data) => {
      dispatch(filterByName(data.value))
    },
    dispatchDropCart : () => dispatch(removeAllItems()),
    dispatchDropFilters: (priceRange) => dispatch(dropFilter(priceRange))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuExamplePointing)