import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Template from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
  <div>
    <Helmet>
      <title>Intro</title>
      <meta name="description" content="Introduction" />
    </Helmet>
    <Template>
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Introduction</h1>
            </header>
            <span className="image main">
              <img src={pic11} alt="" />
            </span>
            <p>
              On April 24th 2013 1134 people were killed and hundreds were
              injured when the Rana Plaza building in Savar, Bangladesh
              collapsed. The unprecedented scale of the disaster meant a
              coordinated, systematic approach was required to ensure the
              victims, their families and dependents would not have to endure
              ill-health and financial hardship resulting from the death of a
              family member or life changing injuries. The Rana Plaza
              Arrangement was established with this objective in late 2013.
            </p>
            <p>
              The Rana Plaza Arrangement was a ground-breaking initiative,
              which, for the first time, brought together representatives from
              along the supply chain to agree a comprehensive and independent
              process that would deliver loss of income payments to those
              families impacted by the Rana Plaza disaster. Between March 2014
              and October 2015 the Arrangement distributed almost $30 million
              directly to the Rana Plaza victims, with a further $1 million paid
              to cover ongoing medical costs.
            </p>
          </div>
        </section>
      </div>
    </Template>
  </div>
)

export default Generic
