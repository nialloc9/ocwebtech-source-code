import React from 'react'

//import blocks
import Summary from './otherComp/Summary'
import FSWB from './otherComp/FSWB'
import Api from './otherComp/Api'

export default class Other extends React.Component{

  constructor(){
    super();
    this.state = {
      selected: "Summary"
    }
  }

  //render
  render(){

    const nav = [
      "Summary",
      "Full Screen Web Pages",
      "REST API's"
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
      case "Full Screen Web Pages":
        component=<FSWB />
        break;
      case "REST API's":
        component=<Api />
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
                  <h1 class="portfolio_title">Other</h1>
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
