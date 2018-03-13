import React, { Component } from "react";

class About extends Component {

  constructor(props) {
    super(props);
    
  }
  

  static async getInitialProps({ query, req, pathname, asPath }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

    console.log(userAgent);
    console.log(pathname);    
    console.log(query, asPath);
    
    return query
  }

  render() {
    return (
      <div>
        <p>This is the about page of {this.props.nar}</p>
      </div>
    );
  }
}

export default About;
