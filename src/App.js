import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import './App.css'
import AppGrid from './components/AppGrid'

class App extends Component {

  render() {
    return (
	    <Container>
	      <AppGrid />
	    </Container>
    );
  }
}

export default App;
