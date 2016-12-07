import React from 'react'
import PortfolioNav from './nav/PortfolioNav'

//import blocks
import Summary from './igoaloComp/Summary'
import Functionality from './igoaloComp/Functionality'
import Languages from './igoaloComp/Languages'
import Code from './igoaloComp/Code'
import Images from './igoaloComp/Images'

export default class Igoalo extends React.Component{
  constructor(){
    super()
    this.state = {
      selected: 'Summary',
    };
  }

  //render
  render(){
    //create nav object
    const nav = [
      "Summary",
      "Functionality",
      "Languages",
      "Code",
      "Images",
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
      case "Functionality":
        component=<Functionality />
        break;
      case "Languages":
        component=<Languages />
        break;
      case "Code":
        component=<Code />
        break;
      case "Images":
        component=<Images />
        break;
      default:
        component=<Summary />
    }

    return(
      <div>
        <div class="content">
          <div class="portfolio_contents">
            <div class="main_body">
              <div class="portfolio_header_wrapper">
                <div class="portfolio_header">
                    <h1 class="portfolio_title">iGoalo Social Network</h1>
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
      </div>
    )
  }
}
