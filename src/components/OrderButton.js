import React from 'react'
import { Input, Menu, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { filterByTypes, filterByName } from '../actions'

<Button animated='vertical' secondary>
  <Button.Content hidden>
    Order
  </Button.Content>
  <Button.Content visible>
    <Icon name='cart' size='big' />
  </Button.Content>
</Button>