import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLandingActivities from '../components/BannerLandingActivities'

import pic01 from '../assets/images/pic01.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <div>
        <Helmet>
            <title>Activities</title>
            <meta name="description" content="Activities" />
        </Helmet>

        <BannerLandingActivities />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Activities</h2>
                    </header>
                   <h3>Timeline and donors</h3>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/timeline" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Timeline</h3>
                            </header>
                            <p>The Rana Plaza Coordination Committee was established on the 13th of September 2013. Since this date, the Committee worked tirelessly, along with the Rana Plaza Claims Administration, to ensure workers injured at Rana Plaza, and the surviving dependents of those killed received payments to cover the financial losses they incurred as a result of the disaster. Two years later, in October 2015,  over $30million had been dispersed to 5109 beneficiaries of the scheme.</p><p>

The establishment, design and implementation of the Rana Plaza Arrangement was complex and required the RPCC to meet ambitious milestones in order to deliver its objective. You'll find here a timeline of the important events, and when they were achieved. </p>
                            <ul className="actions">
                                <li><Link to="/timeline" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/trustfund" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Trust Fund and full Donor list</h3>
                            </header>
                            <p>The Rana Plaza Donors Trust Fund was established in January 2014 by the International Labour Organization (ILO) in order to collect contributions and to hold them in trust under specified Terms and Conditions.  It was agreed that $30 million would be required to cover all awards, a figure developed on the basis of the actual claims forms submitted by eligible beneficiaries.</p>
                            <p>The Fund reached its target in June 2015. The majority of the $30 million collected was contributed by international clothing brands, with significant contributions from the Bangladesh Prime Ministers Fund and anonymous donors as well as small individual donations. These contributions were used exclusively to cover payments to Rana Plaza victims and their families, to provide medical services to those injures, and cover operating costs.</p>
                            <ul className="actions">
                                <li><Link to="/trustfund" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

            </section>
        </div>

    </div>
)

export default Landing