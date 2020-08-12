import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import AppMenu from './components/menu/app-menu';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/home/home';



class App extends React.Component {
  state = {
    menus: [
      { name: 'Home', code: 'home' },
      { name: 'Top 10 News', code: 'top10' },
      { name: 'Login', code: 'login' }
    ]
  }

  render() {
    return (
        <Router>
          <div className="App" >
            <header>
              <AppMenu menus={this.state.menus} />
            </header>
            <Route exact path='/' render={() => {
              return <Redirect to="/home" />
            }} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/top10' render={() => {
              return 'Top 100 News';
            }} />
            <Route exact path='/login' render={() => {
              return 'User Login';
            }} />
          </div>
        </Router>
    );
  }
}

export default App;
