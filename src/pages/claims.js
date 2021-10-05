import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLandingClaims from '../components/BannerLandingClaims'
import Template from '../components/layout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic07 from '../assets/images/pic07.jpg'

const Landing = (props) => (
  <div>
    <Helmet>
      <title>Claims Processing</title>
      <meta name="description" content="Claims processing" />
    </Helmet>
    <Template>
      <BannerLandingClaims />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Who was eligible to make a claim?</h2>
            </header>
            <p>
              Two distinct groups of beneficiaries were able to claim under the
              Arrangement:
            </p>
            <ol>
              <li>
                The first group consisted of individuals injured in the disaster
                and who lost earning capacity as a consequence. This included
                anyone who was in the Rana Plaza building at the time of
                collapse, rescue workers and others who may had been injured in
                the adjacent buildings.{' '}
              </li>
              <li>
                The second group covered dependents either of fatal victims or
                of people who were reportedly missing as result of the Rana
                Plaza incident (including workers, rescue workers etc). In this
                category, claims were made by those who were partially or fully
                reliant on the income earned by the person killed or considered
                missing.{' '}
              </li>
            </ol>
          </div>
        </section>
        <section id="two" className="spotlights">
          <section>
            <Link to="/claims-process" className="image">
              <img src={pic08} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>How were claims submitted and processed?</h3>
                </header>
                <p>
                  The claims system established under the Arrangement was
                  designed to make sure the process was accessible and easy to
                  understand for beneficiaries. The claims process had a number
                  of stages.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/claims-process" className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link to="/calculations" className="image">
              <img src={pic09} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>How were claims calculated?</h3>
                </header>
                <p>
                  The method of calculating the awards was designed in
                  accordance with the principles of ILO Employment Injury
                  Benefits Convention No. 121.{' '}
                </p>
                <p>
                  The formula took into consideration each individual's
                  particular circumstances. Therefore, variables such as the age
                  of the beneficiary, the number of dependents that each claim
                  must cover, the wage earned by the killed or injured worker
                  and the extent of injury suffered in the case of survivors
                  were all factors that influenced the value of the award.{' '}
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/calculations" className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Link to="/healthcare" className="image">
              <img src={pic07} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>Health care and related benefits</h3>
                </header>
                <p>
                  The Arrangement also addressed health care needs of victims
                  injured in the accident. A medical assessment by qualified
                  doctors exercising independent professional judgment projected
                  the required care that would allow victims to attain
                  pre-injury health condition or maximum recovery.
                </p>
                <p>
                  Two separate schemes were then set up under the Arrangement,
                  to ensure ongoing medical treatment. For those workers with a
                  more serious permanent disablement arrangements were made with
                  the Bangladesh NGO BRAC, while for the remaining injured
                  workers a special Trust for Injured Workers Medical Care was
                  established.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/healthcare" className="button">
                      Learn more
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </div>
    </Template>
  </div>
)

export default Landing
