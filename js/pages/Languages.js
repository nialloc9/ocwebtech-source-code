import React from 'react'

import Java from '../components/languages/Java'
import Javascript from '../components/languages/Javascript'
import Php from '../components/languages/Php'
import Summary from '../components/languages/Summary'
import Sql from '../components/languages/Sql'

export default class Languages extends React.Component{

  constructor(){
    super()
    this.state = {
      selected: 'Summary',
    };
  }

  render(){

    //create nav object
    const nav = [
      "Summary",
      "Java",
      "JavaScript",
      "Php",
      "Sql",
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
      case "Java":
        component=<Java />
        break;
      case "JavaScript":
        component=<Javascript />
        break;
      case "Php":
        component=<Php />
        break;
      case "Sql":
        component=<Sql />
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
                  <h1 class="portfolio_title">Languages</h1>
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
