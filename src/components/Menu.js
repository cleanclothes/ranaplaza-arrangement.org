import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

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
    onToggleMenu: PropTypes.func
}

export default Menu
