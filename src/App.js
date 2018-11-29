import React, { Component } from 'react'
import { Container, Divider, Grid, Header, Icon } from 'semantic-ui-react'
import './App.css'
import AccordionExampleMenu from './components/AccordionExampleMenu'
import SearchExampleStandard from './components/SearchExampleStandard'
import MenuExamplePointing from './components/MenuExamplePointing'
import CardExampleGroups from './components/CardExampleGroups'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={3}>
                Logo
              </Grid.Column>
              <Grid.Column width={11}>
                <MenuExamplePointing>
                </MenuExamplePointing>
              </Grid.Column>
              <Grid.Column width={2}>
                <Icon name='cart' size='big' />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={3}>
                <AccordionExampleMenu>
                </AccordionExampleMenu>
              </Grid.Column>
              <Grid.Column width={11}>
                <CardExampleGroups>
                </CardExampleGroups>
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
        </Container>
      </div>
    );
  }
}

export default App;
