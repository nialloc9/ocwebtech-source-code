import React from 'react'

//import blocks
import Summary from './phpComp/Summary'
import Captcha from './phpComp/Captcha'
import VerifyEmail from './phpComp/VerifyEmail'
import Csrf from './phpComp/Csrf'

export default class Php extends React.Component{

  constructor(){
    super();
    this.state = {
      selected: "Summary"
    }
  }
  render(){
    const nav = [
      "Summary",
      "Captcha Generator",
      "Email Verification",
      "CSRF Protection"
    ]

    const determineComp = (text)=>{
      this.setState({selected: text})
    }

    const mappedNav = nav.map((m)=>{
      return <li key={m + Date.now()} onClick={()=>{determineComp(m)}}>{m}</li>
    })

    let component = null

    switch (this.state.selected) {
      case "Summary":
        component=<Summary />
        break;
      case "Captcha Generator":
        component=<Captcha />
        break;
      case "Email Verification":
        component=<VerifyEmail />
        break;
      case "CSRF Protection":
        component=<Csrf />
        break;
      default:
        component=<Summary />
    }

    return(
      <div class="content">
        <div class="portfolio_contents">
          <div class="main_body">
            <div class="portfolio_header_wrapper">
              <div class="portfolio_header">
                  <h1 class="portfolio_title">PHP</h1>
              </div>

              <div class="portfolio_body_wrapper">
                <div class="portfolio_body">
                  <ul className="portfolioNav">
                    {mappedNav}
                  </ul>
                  {component}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
