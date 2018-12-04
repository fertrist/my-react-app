import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import AccordionMenu from './AccordionMenu'
import MenuExamplePointing from './MenuExamplePointing'
import CardExampleGroups from './CardExampleGroups'
import { connect } from 'react-redux'

const AppGrid = ({
  guitars
}) => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src='/images/logo.png' size='small' />
        </Grid.Column>
        <Grid.Column width={13}>
          <MenuExamplePointing />
        </Grid.Column>
        
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <AccordionMenu />
          <Image src='/images/rock-fest-1.png' size='small' />
          <Image src='/images/rock-fest-3.gif' size='small' />
          <Image src='/images/acoustic-fest-2.jpeg' size='small' />
          <Image src='/images/acoustic-fest-1.png' size='small' />
        </Grid.Column>
        
        <Grid.Column width={13}>
            <CardExampleGroups />
        </Grid.Column>
        
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
              Footer
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    guitars: state.guitars
  }
}

export default connect(mapStateToProps)(AppGrid);
