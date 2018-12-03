import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'
import { requestedItems, receivedItems } from './actions'
import AppGrid from './components/AppGrid'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container>
          <AppGrid />
        </Container>
      </div>
    );
  }
}

export default App;
