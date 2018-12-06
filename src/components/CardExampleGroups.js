import React from 'react'
import { Card, Image, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addItemsToCart } from '../actions'

const CardGroups = ({ 
  guitars,
  addToCart,
  brandUrls
}) => (
  <Card.Group itemsPerRow={3}>
  {
    guitars.map(guitar => {
          return (
          <Card centered key={guitar.id}>
            <Card.Content>
              <Card.Header>
                {guitar.name}
              </Card.Header>
              <Image floated ='right' src={guitar.url} size='small' />
              <Card.Description>{guitar.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon.Group>
                 <Button 
                 onClick={(e) => {
                  addToCart(guitar)
                }}
                 animated='vertical'>
                  <Button.Content hidden>
                    <Icon name='cart arrow down'/>
                  </Button.Content>
                  <Button.Content visible>
                    <Icon name='dollar sign'>{guitar.price}</Icon> 
                  </Button.Content>
                </Button>
              </Icon.Group>
              <Image floated ='right' src={brandUrls.get(guitar.brand)} size='tiny' />
            </Card.Content>
          </Card>
        )
      })
  }
  </Card.Group>
)

const showFilteredGuitars = (guitars, filter) => {
  const filters = []
  if (filter.price) {
    if (filter.price.min) {
      filters.push(g => g.price >= filter.price.min)  
    }
    if (filter.price.max) {
      filters.push(g => g.price <= filter.price.max)  
    }
  }
  if (filter.types && filter.types.length && !filter.types.includes("all")) {
    filters.push(g => filter.types.includes(g.type)) 
  }
  if (filter.brands && filter.brands.length) {
    filters.push(g =>  filter.brands.includes(g.brand)) 
  }
  if (filter.nameSegment){
    filters.push(g =>  containsNameSegment(g.name, filter.nameSegment)) 
  }

  return (filters.length === 0) ? guitars :
    guitars.filter(g => filters
                          .map(filter => filter(g))
                          .every(satisfiesFilter => satisfiesFilter === true)
                  )
}

const containsNameSegment = (name, nameSegment) => {
  return name.toLowerCase().indexOf(nameSegment.toLowerCase()) !== -1
}

const mapBrandsToUrl = (brands) => {
  const brandUrls = new Map(brands.map(brand => [brand.name, brand.url]))
  return brandUrls
}

const mapStateToProps = state => ({
  guitars: showFilteredGuitars(state.guitars, state.filter),
  items : state.items,
  brandUrls : mapBrandsToUrl(state.brands)
})

const mapDispatchToProps = dispatch => ({
  addToCart: (guitar) => dispatch(addItemsToCart(guitar, 1))
})
export default connect(mapStateToProps, mapDispatchToProps)(CardGroups)
