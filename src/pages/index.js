import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Template from '../components/layout'
import Banner from '../components/Banner'

import pic11 from '../assets/images/pic11.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic15 from '../assets/images/pic15.jpg'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <Template>
          <Banner />
          <div id="main">
            <section id="one" className="tiles">
              <article style={{ backgroundImage: `url(${pic11})` }}>
                <header className="major">
                  <h2>Introduction</h2>
                  <h3>History and necessity</h3>
                </header>
                <Link to="/intro" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic02})` }}>
                <header className="major">
                  <h2>The Arrangement</h2>
                  <h3>Who created it, and how it was run.</h3>
                </header>
                <Link to="/about" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic15})` }}>
                <header className="major">
                  <h2>Activities</h2>
                  <h3>Timeline &amp; Donors</h3>
                </header>
                <Link to="/activities" className="link primary"></Link>
              </article>
              <article style={{ backgroundImage: `url(${pic04})` }}>
                <header className="major">
                  <h2>Claims &amp; payments</h2>
                  <h3>Methodology, calculations, and health care benefits</h3>
                </header>
                <Link to="/claims" className="link primary"></Link>
              </article>
            </section>
          </div>
        </Template>
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
