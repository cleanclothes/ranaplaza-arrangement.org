import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/intro">Intro</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">The Arrangement</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/activities">Activities</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/claims">Claims &amp; payments</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
