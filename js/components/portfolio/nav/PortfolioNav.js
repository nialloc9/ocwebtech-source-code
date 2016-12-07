import React from 'react'

export default class PortfolioNav extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      selected: this.props.nav[0],
    };
  }

  render(){
    //detructure props
    const { nav } = this.props

    const determineComp = (text)=>{
      this.setState({selected: text})
    }

    const mappedNav = nav.map((m)=>{
      return <li className="portfolioNav" key={m + Date.now()} onClick={()=>{determineComp(m)}}>{m}</li>
    })

    return(
      <div>
        <ul className="portfolioNav">
          {mappedNav}
        </ul>
      </div>
    )
  }

}
