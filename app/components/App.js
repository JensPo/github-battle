var React = require('react'),
    Popular = require('./Popular'),
    ReactRouter = require('react-router-dom'),
    Router = ReactRouter.BrowserRouter,
    Route = ReactRouter.Route,
    Switch = ReactRouter.Switch,
    Nav = require('./Nav'),
    Home = require('./Home'),
    Battle = require('./Battle');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className = 'container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/popular' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route render={function() {
              return <p>Sorry! That page does not exist</p>
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
