import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLandingAbout from '../components/BannerLandingAbout'

import pic06 from '../assets/images/pic06.jpg'
import pic13 from '../assets/images/pic13.jpg'
import pic14 from '../assets/images/pic14.jpg'

const Landing = (props) => (
    <div>
        <Helmet>
            <title>About</title>
            <meta name="description" content="The Arrangement" />
        </Helmet>

        <BannerLandingAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>The Arrangement</h2>
                    </header>
                    <p>In September 2013, six months after the collapse of the Rana Plaza building, the International Labour Organisation hosted a meeting at its Geneva headquarters, convened by IndustriALL Global union. The meeting was attended by representatives of Bangladesh trade unions, several brands and retailers who had been buying from one or more of the Rana Plaza factories, international and Bangladesh NGOs and representatives of the Bangladesh government. The participants agreed to work towards a proposal for calculating loss of income payments, in line with ILO Convention 121, for each of the workers killed and injured at Rana Plaza, provision of medical treatment for those with long term injuries and a system for dispersing those payments that would be credible and transparent. </p>
                    <p>In December that year these discussions resulted in the signing of an agreement known as the Rana Plaza Arrangement, which established a number of principles upon which resulting payments would be based. The agreement also established the Rana Plaza Coordination Committee, made up of representatives of the Bangladesh government, international clothing brands, national employers, global and local unions and international and local non governmental organisations. Over the following two years, with the <a href="http://www.ilo.org/global/lang--en/index.htm">International Labour Organisation (ILO)</a> acting as a neutral chair, the Committee met regularly to negotiate and agree the terms and practical steps for the implementation of the Arrangement. </p>
                    <p>By October 2015 payments to the beneficiaries of the scheme were complete. In total 34,009,361.96 dollars was paid out to families of the deceased and to workers injured in the collapse. Medical care for those seriously and moderately injured in the collapse is ongoing.</p>
                    <p>The payments made under the scheme, along with the operational costs, were funded through contribution made to the Rana Plaza Donors Trust Fund, set up by the ILO for the purposes of collecting donations. The majority of the $30 million collected was contributed by international clothing brands, with the rest paid by the Prime Ministers Fund and other small donors.</p>

                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/rpcc" className="image">
                        <img src={pic06} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Rana Plaza Coordination Committee</h3>
                            </header>
                            <p>The Rana Plaza Coordination Committee was established in order to negotiate the terms of the Arrangement and to oversee its overall implementation. It was made up of representatives of all of the major stakeholders involved in the scheme, including from the Ministry of Labour of the Government of Bangladesh, the local and international garment industry, local and international trade unions and local and international non-governmental organisations. The International Labour Organisation acted as a neutral and independent chair.</p>
                            <ul className="actions">
                                <li><Link to="/rpcc" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/rpca" className="image">
                        <img src={pic13} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Rana Plaza Claims Administration</h3>
                            </header>
                            <p>The Rana Plaza Claims Administration was established in early 2014, in order to implement the day to day work of the Accord. Over seen by three Commissioners, it also employed a team of lawyers, accountants and IT specialists to process the claims, develop and run the calculation software, support the setting up of bank accounts, deal with legal issues and oversee the post claim services. </p>
                            <ul className="actions">
                                <li><Link to="/rpca" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/commissioners" className="image">
                        <img src={pic14} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>The Commissioners</h3>
                            </header>
                            <p>The Claims Commissioners provided a quasi judicial feature to ensure due process was following in the establishment and delivery of the Arrangement. The Commissioners were responsible for determining the amount of compensation to be awarded to each claimant within the framework agreed upon by the Coordination Committee. They oversaw and certify the correctness and independence of the claims processing and the work of the claims review team.</p>
                            <ul className="actions">
                                <li><Link to="/commissioners" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </div>
)

export default Landing