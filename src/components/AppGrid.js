import React from 'react'
import { Grid, Header, Icon, Container } from 'semantic-ui-react'
import AccordionExampleMenu from './AccordionExampleMenu'
import MenuExamplePointing from './MenuExamplePointing'
import CardExampleGroups from './CardExampleGroups'
import { connect } from 'react-redux'

const AppGrid = ({
  guitars
}) => {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={3}>
          Logo
        </Grid.Column>
        <Grid.Column width={11}>
          <MenuExamplePointing />
        </Grid.Column>
        <Grid.Column width={2}>
          <Icon name='cart' size='big' />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={3}>
          <AccordionExampleMenu />
        </Grid.Column>
        
        <Grid.Column width={11}>
          <Container>
            <CardExampleGroups />
          </Container>
        </Grid.Column>

        <Grid.Column width={2}>
          banner
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <Header textAlign='center'>
            <p className='inner'>Footer</p>
          </Header>
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
