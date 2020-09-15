import React, {Component,Fragment} from 'react';

import Navbar from './containers/navbar'
import Portrait from './Components/portrait'

class App extends Component{

  render(){
    return <Fragment>
      <Navbar/>   
      <Portrait/>   
    </Fragment> 
  }

}
export default App;
