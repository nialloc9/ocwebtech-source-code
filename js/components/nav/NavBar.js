import React from 'react'
import { Link } from 'react-router'

import Contact from '../modals/Contact'

export default class NavBar extends React.Component{

  //portfolio click
  portfolioDropdown(){
    document.getElementById("portfolioDropdown").classList.toggle("show")
  }

  //nav logo click
  openMenuClick(){
    const bodyEl = document.getElementById('body')
    bodyEl.classList.toggle('active-nav')
  }

  //render
  render(){

    //destructure store
    const { icon, home, about, portfolio, languages, resume, thingsilike, contact } = this.props.store

    return(
      <nav>
        <a className="nav-toggle-btn" onClick={this.openMenuClick.bind(this)}><img alt={icon.alt} src={icon.src} className="nav_icon_image"/></a>

        <ul>
            <li><Link to={home.link}><p className={home.selected}>{home.text}</p></Link></li>
            <li><Link to={about.link}><p className={about.selected}>{about.text}</p></Link></li>
            <li>
                <div className="dropdown">
                  <button onClick={this.portfolioDropdown.bind(this)} className={portfolio.existingClass + ' ' + portfolio.selected}>{portfolio.text}
                      <span className="glyphicon glyphicon-menu-down" aria-hidden="true"></span></button>
                    <div id="portfolioDropdown" className="dropdown-content">
                        <Link to={portfolio.submenu.igoalo.link}><p className={portfolio.submenu.igoalo.selected}>{portfolio.submenu.igoalo.text}</p></Link>
                        <Link to={portfolio.submenu.ocwebtech.link}><p className={portfolio.submenu.ocwebtech.selected}>{portfolio.submenu.ocwebtech.text}</p></Link>
                        <Link to={portfolio.submenu.javascript.link}><p className={portfolio.submenu.javascript.selected}>{portfolio.submenu.javascript.text}</p></Link>
                        <Link to={portfolio.submenu.java.link}><p className={portfolio.submenu.java.selected}>{portfolio.submenu.java.text}</p></Link>
                        <Link to={portfolio.submenu.php.link}><p className={portfolio.submenu.php.selected}>{portfolio.submenu.php.text}</p></Link>
                        <Link to={portfolio.submenu.other.link}><p className={portfolio.submenu.other.selected}>{portfolio.submenu.other.text}</p></Link>
                    </div>
                </div>
            </li>
            <li><Link to={languages.link}><p className={languages.selected}>{languages.text}</p></Link></li>
            <li><a href={resume.href}><p className={resume.selected}>{resume.text}</p></a></li>
            <li><Link to={thingsilike.link}><p className={thingsilike.selected}>{thingsilike.text}</p></Link></li>
            <li><Contact /></li>
        </ul>
    </nav>
    )
  }

}
