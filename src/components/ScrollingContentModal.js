import React, {Component} from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import Table from './CartTable'

class NestedModal extends Component {
  constructor(props){
    super(props)
    const {dispatchDropCart, dispatchDropFilters, cartItems} = props
    this.state = {dispatchDropCart, dispatchDropFilters, cartItems, open: false }
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
                this.state.dispatchDropFilters()
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

const ModalExampleScrollingContent = ({
  trigger,
  cartItems,
  dispatchDropCart,
  dispatchDropFilters
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
      <Table items={cartItems}/>
      
    </Modal.Content>
    <Modal.Actions>
      <NestedModal dispatchDropCart={dispatchDropCart}
        dispatchDropFilters={dispatchDropFilters}
        cartItems={cartItems}/>
    </Modal.Actions>
  </Modal>
)}

export default ModalExampleScrollingContent
