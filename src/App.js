import React, {Component} from 'react';
import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom'
import Cars from "./Cars/Cars";
import About from "./About/About";
import CarDetail from "./CarDetail/CarDetail";



class App extends Component{



  render() {
    const divStyle={
      textAlign:'center'
    }



    return(
        <div style={divStyle}>

                <nav className="nav">
                    <ul>
                        <li><NavLink exact to="/" activeClassName={'wfm-active'} >Home</NavLink></li>
                        <li><NavLink exact to="/about" activeStyle={{color:'blue'}}> About</NavLink></li>
                        <li><NavLink exact to={{pathname:'/cars', search:'?a=1&b=2', hash:'wmf-hash'}}>Cars</NavLink></li>
                    </ul>
                </nav>
            <hr/>
            {/*localhost:3000*/}
            <Switch>
                <Route path={'/'} exact render={()=> <h1>Home Page</h1>}/>

                <Route path={'/about'} exact component={About} />
                <Route path={'/cars/:name'}  component={CarDetail} />
                <Route path={'/cars'}  render={()=> <Cars/>}/>
            </Switch>

        </div>
    )

  }
}



export default App;
