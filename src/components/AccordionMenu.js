import React from 'react'
import { Accordion, Form, Menu, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByTypes, filterByBrands } from '../actions'

const CheckboxForm = (items, name) => {
    console.log(items, name)
  return (
  <Form inverted>
    <Form.Group grouped>
      {
        items.map(item => (
            <Form.Checkbox 
              key={item} 
              label={item} 
              name={name} 
              onChange={(e, data) => console.log(data)}
              />      
          ))
      }
    </Form.Group>
  </Form>)
}

const AccordionMenu = ({
  filter,
  brands,
  types,
  handleClick
}) => {
    var duration=100
    return (
      <Accordion 
        as={Menu} vertical inverted>
        <Menu.Item>
          <Header inverted as='h3'>Filter</Header>
        </Menu.Item>

        <Menu.Item>
          <Header inverted as='h3'>Brands</Header>
          {CheckboxForm(brands, 'brand')}
        </Menu.Item>

        <Menu.Item>
          <Header inverted as='h3'>Types</Header>
          {CheckboxForm(types, 'type')}
        </Menu.Item>

        <Menu.Item>
          <Form.Input
            label={`Max price: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={(e, { name, value }) => duration = value}
            step={100}
            type='range'
            value={duration}
          />
        </Menu.Item>
      </Accordion>
    )
  } 

const mapStateToProps = state => {
  return {
    brands : state.brands,
    types : state.types
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleBrandClick : (e, type) => {
      dispatch(filterByTypes([type]))
    },
    handleTypeClick : (e, data) => {
      dispatch(filterByBrands(data.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionMenu)