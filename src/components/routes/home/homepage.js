import React, { Component } from 'react';
import { connect } from 'react-redux';
import Storycard from '../../common/storycard';
import Contributecard from '../../common/contributecard';
import {mapStateToProps,mapDispatchToProps} from './homecontainer';
import Page from '../../common/page/page';
import META from '../../../constants/meta';
import Sketch from '../../../assets/sketch.png';
import Startup from '../../../assets/startup.png';
import Growth from '../../../assets/growth.png';
import Footer from '../../common/footer'
class HomePage extends Component {
  render() {
    return(
      <Page {...META.home}>
        <div className="homepage">
          <div className="landing-screen">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="landing-screen-content">
                    <h1>Theory of Growth</h1>
                    <p>Hi I am Madhav Shankar. I am an

                      entrepreneur with hands on experience in

                      working with seed and growth stage startups

                      and I believe the evolution of startup starts

                      by building a viable business model around
                      your product or service.
                    </p>
                    <a href="http://read.madhavshankar.com/blog/" className="btn btn-outline-white my-1 my-sm-0 mt-lg-3  mt-sm-3  mt-xs-3  mt-md-3">Know More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="story">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>The Story so far : </p>
                  <div className="story-list">
                    <span className="story-card">
                      <p className="count">50+</p>
                      <p className="description">Brands</p>
                    </span>
                    <span className="story-card">
                      <p className="count">10+</p>
                      <p className="description">Products<br/> Launched</p>
                    </span>
                    <span className="story-card">
                      <p className="count">7+</p>
                      <p className="description">Years of<br/> experience<br/> with Startups</p>
                    </span>
                    <span className="story-card">
                      <p className="count">3+</p>
                      <p className="description">Startups<br/> Built and <br/>Operated</p>
                    </span>
                    <span className="story-card">
                      <p className="count">20k+</p>
                      <p className="description">Users<br/> Acquired</p>
                    </span>
                    {/* <Storycard count="50" desc="Brands"/>
                    <Storycard count="10" desc="Products Launched"/>
                    <Storycard count="7" desc="Years of experience with Startups"/>
                    <Storycard count="3" desc="Startups Built and Operated"/>
                    <Storycard count="20k" desc="Users Acquired"/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contribute">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>How can i contribute? </p>
                  <div className="contribute-list">
                    <Contributecard image={Startup} desc="Product Launch and Management"/>
                    <Contributecard image={Sketch} desc="Interaction and Product Design"/>
                    <Contributecard image={Growth} desc="Marketing, Analytics and Growth"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="blog">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h2>Blog</h2>
                  <p>I write about entrepreneurship, product, design and management. I would love to share my learnings with you. Follow my blog to keep yourself updated and collaborate if you have similar interests.</p>
                  <a href="http://read.madhavshankar.com/blog/" className="btn btn-outline-black my-2 my-sm-0 mt-lg-3" >Read about growth</a>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-3">
                  <h2>Mentions</h2>
                  <ul>
                    <li>VCCircle</li>
                    <li>IndianWeb</li>
                    <li>iamwire</li>
                    <li>inc42</li>
                    <li>BWDisrupt</li>
                    <li>LondonTechWeek</li>
                    <li>DealStreetAsia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Page>
    );
  }
}

HomePage.PT = {

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
