import React from 'react'

//import blocks
import Comp from './ocwebtechComp/Comp'
import Redux from './ocwebtechComp/Redux'
import Summary from './ocwebtechComp/Summary'
import SPA from './ocwebtechComp/SPA'

export default class OCWebTech extends React.Component{

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
      "ReactJs Components",
      "Redux State Management",
      "Single Page Application"
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
      case "ReactJs Components":
        component=<Comp />
        break;
      case "Redux State Management":
        component=<Redux />
        break;
      case "Single Page Application":
        component=<SPA />
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
                  <h1 class="portfolio_title">OCWebTech</h1>
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
