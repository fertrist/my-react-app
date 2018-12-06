import React from 'react'
import { Input, Menu, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByTypes, filterByName } from '../actions'

const MenuExamplePointing = ({
  types,
  activeItem,
  handleMenuItemClick,
  handleSearchTyping
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
                onChange={handleSearchTyping} />
            </Menu.Item>
            <Button 
            style={{marginRight: 0}}
            animated='vertical' 
            secondary>
              <Button.Content hidden> 
                Order 
              </Button.Content>
              <Button.Content visible>
                <Icon name='cart' size='big'>{}</Icon>
              </Button.Content>
            </Button>
          </Menu.Menu>
        </Menu>
        
      </div>
    )
}

const getActiveItem = (types) => {
  return (types && types.length === 1) ? types[0] : 'all';
}

const mapStateToProps = state => {
  return {
    activeItem: getActiveItem(state.filter.types),
    types: state.types
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