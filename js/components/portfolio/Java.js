import React from 'react'

//import blocks
import Summary from './javaComp/Summary'
import JavaGame from './javaComp/JavaGame'
import JavaCalc from './javaComp/JavaCalc'
import JavaIM from './javaComp/JavaIM'

export default class Java extends React.Component{

  constructor(){
    super()
    this.state = {
      selected: "Summary"
    }
  }

  //render
  render(){
    const nav = [
      "Summary",
      "Java Game",
      "Java Calculator",
      "Java Instant Messenger"
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
      case "Java Game":
        component=<JavaGame />
        break;
      case "Java Calculator":
        component=<JavaCalc />
        break;
      case "Java Instant Messenger":
        component=<JavaIM />
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
                  <h1 class="portfolio_title">Java</h1>
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
