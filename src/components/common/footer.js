import React, {Component} from 'react';
import Twitter from '../../assets/twitter.png';
import Behance from '../../assets/behance.png';
import LinkedIn from '../../assets/linkedin.png';
import Facebook from '../../assets/facebook.png';

class Footer extends Component {
  render(){
    let date = new Date();
    let year = date.getFullYear()
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="get-in-touch">
                <p>Get in Touch :</p>
                <ul>
                  <li><a href="https://www.facebook.com/madshankar"><img src={Facebook} width="20" alt="Facebook"/></a></li>
                  <li><a href="https://www.linkedin.com/in/madhav-shankar-00069444/"><img src={LinkedIn} width="20" alt="LinkedIn"/></a></li>
                  <li><a href="https://www.behance.net/madhavshankar"><img src={Behance} width="25" style={{marginTop : '4px'}} alt="Beahance"/></a></li>
                  <li><a href="https://twitter.com/madstrategizt"><img src={Twitter} width="25" style={{marginTop : '4px'}} alt="Twitter"/></a></li>
                </ul>
              </div>
              <p className="copyright">All rights are reserved to madhavshankar.com &copy; {year}</p>
              <p className="copyright">Developed by <a href="http://imabhi.in" target="_blank">Abhishar Jangir</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
