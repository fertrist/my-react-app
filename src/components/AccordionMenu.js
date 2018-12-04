import React from 'react'
import { Accordion, Form, Menu, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByTypes, filterByBrands } from '../actions'

const BrandsForm = ({
  brands, onChange
}) => {
  return (<Form inverted>
    <Form.Group grouped>
      {
        brands.map(brand => (
            <Form.Checkbox 
              key={brand.name} 
              label={brand.name} 
              name='brand' 
              onChange={onChange}
              />      
          ))
      }
    </Form.Group>
  </Form>
)}

const TypesForm = ({
  types, onChange
}) => {
  return (
    <Form inverted>
      <Form.Group grouped>
        {
          types.map(type => (
              <Form.Checkbox 
                key={type} 
                label={type} 
                name='type' 
                onChange={onChange}
                />      
            ))
        }
      </Form.Group>
    </Form>
)}


const AccordionMenu = ({
  filter,
  brands,
  types,
  handleBrandClick,
  handleTypeClick
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
          {BrandsForm({brands, onChange: handleBrandClick})}
        </Menu.Item>

        <Menu.Item>
          <Header inverted as='h3'>Types</Header>
          {TypesForm({types, onChange: handleTypeClick})}
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
    handleBrandClick : (e, data, existingFilters) => {
      dispatch(filterByTypes([...existingFilters, data.value]))
    },
    handleTypeClick : (e, data, existingFilters) => {
      dispatch(filterByBrands([...existingFilters, data.value]))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionMenu)