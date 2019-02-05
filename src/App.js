import React, { Component } from 'react';
import MuffinBuilder from './containers/MuffinBuilder/MuffinBuilder'
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
         <MuffinBuilder/>
      </Layout>
      </div>
    );
  }
}

export default App;
