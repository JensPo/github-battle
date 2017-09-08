var React = require('react'),
    Link = require('react-router-dom').Link;


class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1> Battle your friends! </h1>
        <Link className='button' to='/battle'>
          battle
        </Link>
      </div>
    )
  }
}

module.exports = Home;
