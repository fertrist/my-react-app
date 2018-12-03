import React from 'react'
import { Button, Card, Image, Icon, Label, Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addItemsToCart } from '../actions'

const CardGroups = ({ 
  guitars,
  addToCart
}) => (
  <Card.Group centered>
  {
    guitars.map(guitar => {
          return (
          <Card key={guitar.id}>
            <Card.Content>
              <Card.Header>{guitar.name}</Card.Header>
              <Image src={guitar.url} size='small' />
              <Card.Description>{guitar.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Icon.Group>
              <span>
                <Icon name='cart arrow down' size='large'/>
              </span>  
              <span floated='left'>
                <Icon name='dollar sign' size='large'>{guitar.price}</Icon>
              </span>
            </Icon.Group>
            </Card.Content>
          </Card>
        )
      })
  }
  </Card.Group>
)

const mapStateToProps = state => ({
  guitars: state.guitars,
  items : state.items
})

const mapDispatchToProps = dispatch => ({
  addToCart: (guitar) => dispatch(addItemsToCart(guitar, 1))
})

export default connect(mapStateToProps)
(CardGroups)