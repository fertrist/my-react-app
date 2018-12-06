import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByPrices } from '../actions'

class OldRangeInputPresenter extends Component {

  constructor(props) {
    super(props)
    this.state = {...props, currentValue: props.filterPrice.max}
    console.log('OldRangeInputPresenter#constructor', this.state)
    
    this.handlers = {
      dispatchChange: (price) => props.dispatch(filterByPrices(price)),
      dropFilter : () => props.dropRangeFilter(() => this.setState({currentValue: props.filterPrice.max}))
    };
  }

  render() {
    console.log('render OldRangeInputPresenter')
    console.log(this.state)  
    return (<Form.Input
            type='range'
            min={this.state.priceRange.min}
            max={this.state.priceRange.max}
            name='maxPrice'
            label={`Max price: $${this.state.currentValue}`}
            value={this.state.currentValue}
            onChange={(e, data) => {
              this.setState({...this.state, currentValue : data.value})
            }}
            onMouseUp={() => {
                this.handlers.dispatchChange({ max : this.state.currentValue})
              }
            }
          />
    )
  }

  someAction = (price) => {
    this.setState({...this.state, currentValue: price.max})
  }
}

const OldRangeInput = connect((state) => ({
    filterPrice : state.filter.price,
    priceRange : state.priceRange
  }))(OldRangeInputPresenter)









const RangeInput = ({
  priceRange,
  value,
  onChange
}) => {
    console.log(priceRange)
    console.log(value)
    console.log(onChange)
    return (<Form.Input
            type='range'
            min={100}
            max={200}
            name='maxPrice'
            value={100}
            onChange={onChange}
          />
    )
}

const mapStateToProps = state => {
  return {
    priceRange: state.priceRange,
    filterPrice: state.filter.price,
    currentValue: state.filter.price.max
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchChange : (price) => dispatch(filterByPrices(price))
  }
}

const NewRangeInput = connect(mapStateToProps, mapDispatchToProps)(RangeInput)


export default OldRangeInput