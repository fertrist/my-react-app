import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByPrices } from '../actions'

class RangeInput extends Component {

  state = { value : this.props.max }
 
  componentDidUpdate(prevProps) {
    if (prevProps.max !== this.props.max) {
      this.setState({value : this.props.max})
    }
  }

  render() {

    return (<Form.Input
            type='range'
            min={this.props.priceRange.min}
            max={this.props.priceRange.max}
            name='maxPrice'
            label={`Max price: $${this.state.value}`}
            value={this.state.value}
            onChange={(e, data) => {
              this.setState({value : data.value})
            }}
            onMouseUp={() => {
                this.props.filterByPrices({ max : this.state.value})
              }
            }
          />
    )
  }

  someAction = (price) => {
    this.setState({...this.state, currentValue: price.max})
  }
}

export default connect((state) => {
  return {
    max : state.filter.price.max,
    priceRange : state.priceRange
  }
}, { filterByPrices })(RangeInput)
