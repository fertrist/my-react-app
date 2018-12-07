import React from 'react'
import { Input, Menu, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByTypes, filterByName } from '../actions'
import ScrollingModal from './ScrollingContentModal'

const CartButton = ({cart}) => {
  return (
    <Button 
      style={{marginRight: 0}}
      animated='vertical' 
      secondary>
    <Button.Content hidden> 
      Order 
    </Button.Content>
    <Button.Content visible>
      <Icon name='cart' size='big' />
        {cartSum(cart)}
    </Button.Content>
  </Button>
    )
}

const MenuExamplePointing = ({
  types,
  cart,
  activeItem,
  handleMenuItemClick,
  handleSearchTyping
}) => {
    console.log(cart)
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
                onChange={handleSearchTyping} />
            </Menu.Item>
            <ScrollingModal trigger={
              <Button style={{marginRight: 0}}
                    animated='vertical' 
                    secondary>
                <Button.Content visible>
                    <Icon name='cart' size='big' />
                    {cartSum(cart)}
                </Button.Content>    
                <Button.Content hidden> 
                  order
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
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleMenuItemClick : (e, type) => {
      dispatch(filterByTypes([type]))
    },
    handleSearchTyping : (e, data) => {
      dispatch(filterByName(data.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuExamplePointing)