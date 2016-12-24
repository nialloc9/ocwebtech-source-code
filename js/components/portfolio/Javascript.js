import React from 'react'


//import blocks
import Summary from './javascriptComp/Summary'
import Captcha from './javascriptComp/Captcha'
import InputColorChange from './javascriptComp/InputColorChange'
import ListMaker from './javascriptComp/ListMaker'
import ShouldIInvest from './javascriptComp/ShouldIInvest'
export default class Javascript extends React.Component{

  constructor(){
    super()
    this.state = {
      selected: "summary"
    }
  }
  //render
  render(){
    const nav = [
      "Summary",
      "Captcha Generator",
      "Prototypal inheritance Input Color Change",
      "JS Listmaker Module",
      "Should I Invest App"
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
      case "Prototypal inheritance Input Color Change":
        component=<InputColorChange />
        break;
      case "JS Listmaker Module":
        component=<ListMaker />
        break;
      case "Should I Invest App":
        component=<ShouldIInvest />
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
                  <h1 class="portfolio_title">Javascript</h1>
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
