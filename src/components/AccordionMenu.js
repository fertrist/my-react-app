import React from 'react'
import { Accordion, Form, Menu, Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByType, filterByBrand, dropFilter, filterByPrices } from '../actions'
import RangeInput from './RangeInput'

const BrandsFormPresenter = ({
  brands, filterBrands, handleBrandClick
}) => {
  return (<Form inverted>
    <Form.Group grouped>
      {
        brands.map(brand => (
            <Form.Checkbox 
              key={brand.name} 
              label={brand.name} 
              name={brand.name} 
              checked={filterBrands.includes(brand.name)}
              onChange={(e, data) => handleBrandClick(e, data)}
              />      
          ))
      }
    </Form.Group>
  </Form>
)}

const mapStateToBrandFilterProps = state => {
  return {
    brands : state.brands,
    filterBrands : state.filter.brands
  }
}

const mapDispatchToBrandFilterProps = dispatch => {
  return {
    handleBrandClick : (e, data, checked) => {
      dispatch(filterByBrand(data.name, data.checked))
    }
  }
}

const BrandsForm = connect(mapStateToBrandFilterProps, mapDispatchToBrandFilterProps)(BrandsFormPresenter)

const TypesFormPresenter = ({
  types, filterTypes, handleTypeClick
}) => {
  return (
    <Form inverted>
      <Form.Group grouped>
        {
          types.map(type => (
              <Form.Checkbox 
                key={type} 
                label={type} 
                name={type} 
                checked={filterTypes.includes(type)}
                onChange={(e, data) => handleTypeClick(e, data)}
                />      
            ))
        }
      </Form.Group>
    </Form>
)}

const mapStateToTypeFilterProps = state => {
  return {
    types : state.types,
    filterTypes: state.filter.types
  }
}

const mapDispatchToTypeFilterProps = dispatch => {
  return {
    handleTypeClick : (e, data) => {
      dispatch(filterByType(data.name, data.checked))
    }
  }
}

const TypesForm = connect(mapStateToTypeFilterProps, mapDispatchToTypeFilterProps)(TypesFormPresenter)

const AccordionMenu = ({
  filterPrice,
  priceRange,
  dispatchDropFilters,
  dispatchChange
}) => {
    let rangeInput = undefined

    return (
      <Accordion 
        as={Menu} vertical inverted>
        <Menu.Item>
          <div>
            <Header inverted as='h3'>
              <span>Filter</span>
              <span style={{float: 'right'}}>
                <Icon onClick={() => {
                    dispatchDropFilters()
                  }
                } name='trash alternate'/>
              </span>
            </Header>
          </div>   
        </Menu.Item>

        <Menu.Item>
          <Header inverted as='h3'>Brands</Header>
          <BrandsForm />
        </Menu.Item>

        <Menu.Item>
          <Header inverted as='h3'>Types</Header>
          <TypesForm />
        </Menu.Item>

        <Menu.Item>
          <RangeInput ref={(node) => rangeInput = node}/>
        </Menu.Item>
      </Accordion>
    )
  } 

const mapStateToProps = (state) => {
  return { 
    filterPrice: state.filter.price,
    priceRange : state.priceRange
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    dispatchDropFilters: () => {
      dispatch(dropFilter())
    },
    dispatchChange: (price) => {
      dispatch(filterByPrices(price))
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccordionMenu)