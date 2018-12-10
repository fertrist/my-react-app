import React from 'react'
import { Table, Button, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addItemsToCart, removeItemFromCart, removeItemsFromCart } from '../actions'

const toCartRow = (
  cartItem,
  addItemsToCart, 
  removeItemFromCart,
  removeItemsFromCart
  ) => {
  const item = cartItem.item
  return (
    <Table.Row key={item.id}>

      <Table.Cell>
        <Image size='tiny' src={item.url} />
      </Table.Cell>

      <Table.Cell>{item.name}</Table.Cell>
      
      <Table.Cell>
        {item.description}
      </Table.Cell>
      
      <Table.Cell>
        {cartItem.count}
      </Table.Cell>

      <Table.Cell>
        {item.price}
      </Table.Cell>

      <Table.Cell>
        {cartItem.price}
      </Table.Cell>

      <Table.Cell>
        <Button.Group>
          <Button onClick={() => removeItemFromCart(item)}>-</Button>
          <Button onClick={() => addItemsToCart(item, 1)}>+</Button>
          <Button onClick={() => removeItemsFromCart(item)}>X</Button>
        </Button.Group>
      </Table.Cell>

    </Table.Row>
    )
}

const TableExample = ({
  items,
  totalPrice,
  addItemsToCart,
  removeItemFromCart,
  removeItemsFromCart
}) => (
  <Table selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell></Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Count</Table.HeaderCell>
        <Table.HeaderCell>Price/item</Table.HeaderCell>
        <Table.HeaderCell>Total price</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        items.map(item => toCartRow(item,addItemsToCart,
        removeItemFromCart, removeItemsFromCart))
      }
    </Table.Body>
    
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='7'>
          Total price : ${totalPrice}
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

const mapStateToProps = (state) => {
  return { 
    items: state.cart,
    totalPrice: state.cart.reduce((s, item) => s += item.price, 0)
  }
}
const mapDispatchToProps = (dispatch) => {
  return { 
    addItemsToCart: (item, count) => {
      dispatch(addItemsToCart(item, count))
    },
    removeItemFromCart: item => {
      dispatch(removeItemFromCart(item))
    },
    removeItemsFromCart : item => {
      dispatch(removeItemsFromCart(item))
    } 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TableExample)