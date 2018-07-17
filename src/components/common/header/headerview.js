import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      headerClass: 'navbar bg-transparent'
    }
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <nav className={this.state.headerClass}>
        <a className="navbar-brand" href="/"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <a className="btn btn-outline-white my-2 my-sm-0" href="http://read.madhavshankar.com/blog/">Blog</a>

        </button>
        <div className=" collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <a className="btn btn-outline-white my-2 my-sm-0" href="http://read.madhavshankar.com/blog/">Blog</a>
        </div>
      </nav>
    )
  }
}

export default Header;
