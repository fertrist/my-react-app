import _ from 'lodash'
import React, {Component} from 'react'
import { Button, Header, Icon, Image, Modal, Item } from 'semantic-ui-react'

const toCartItem = (cartItem) => {
  const item = cartItem.item
  return (
    <Item key={item.id}>
      <Item.Image size='tiny' src={item.url} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='a'>{item.name}</Item.Header>
        <Item.Meta>{item.description}</Item.Meta>
        <Item.Description>
        {item.name}:{item.price}x{cartItem.count}={cartItem.price}
        </Item.Description>
      </Item.Content>
    </Item> 
    )
}

class NestedModal extends Component {
  constructor(props){
    super(props)
    const {dispatchDropCart, dispatchDropFilter, cartItems} = props
    this.state = {dispatchDropCart, dispatchDropFilter, cartItems, open: false }
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render(){
    return (
        <Modal
          open={this.state.open}
          onOpen={this.open}
          onClose={this.close}
          size='small'
          trigger= {
            this.state.cartItems.length===0 ? null :
            <Button secondary onClick={() => {
                this.state.dispatchDropCart()
                this.state.dispatchDropFilter()
                this.setState({...this.state, cartItems: []})
              }
            }>
              Order
            </Button>
          }
        >
          <Modal.Header>Order was submitted</Modal.Header>
          <Modal.Actions>
            <Button icon='check' content='All Done' onClick={this.close} />
          </Modal.Actions>
        </Modal>
      )
  }

}

class NestedModalComponent extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClose={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Proceed <Icon name='right chevron' />
          </Button>
        }
      >
        <Modal.Header>Order was submitted</Modal.Header>
        <Modal.Actions>
          <Button icon='check' content='All Done' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const ModalExampleScrollingContent = ({
  trigger,
  cartItems,
  dispatchDropCart,
  dispatchDropFilter
}) => {
  return (
  <Modal trigger={trigger}>
    <Modal.Header>
      {cartItems.length > 0 ? 'Your order' : 'Order is empty'}
      <span style={{float: 'right'}}>
        <Icon onClick={() => {
            dispatchDropCart()
          }
        } name='trash alternate'/>
      </span>
    </Modal.Header>
    <Modal.Content image scrolling>
      <Item.Group divided>
        {
          cartItems.map(cartItem => toCartItem(cartItem))
        }
      </Item.Group>
    </Modal.Content>
    <Modal.Actions>
      <NestedModal dispatchDropCart={dispatchDropCart}
        dispatchDropFilter={dispatchDropFilter}
        cartItems={cartItems}/>
    </Modal.Actions>
  </Modal>
)}

export default ModalExampleScrollingContent
