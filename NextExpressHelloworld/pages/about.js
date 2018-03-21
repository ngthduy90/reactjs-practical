import React, { Component } from "react";
import Layout from '../comps/BaseLayout'
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
      <Layout>
        <p>This is the about page of {this.props.nar}</p>
      </Layout>
    );
  }
}

export default About;
