import React from 'react'
import { connect } from 'react-redux'

//import block components
import Javascript from '../components/portfolio/Javascript'
import Igoalo from '../components/portfolio/Igoalo'
import Java from '../components/portfolio/Java'
import Php from '../components/portfolio/Php'
import OcWebTech from '../components/portfolio/OcWebTech'
import Other from '../components/portfolio/Other'

@connect((store)=>{
  return {
    store:store
  }
})

export default class Portfolio extends React.Component{
  render(){
    const { project } = this.props.params

    const determineComponent = (p, s)=>{
      switch (p) {
        case 'javascript':
          return <Javascript />
          break;
        case 'java':
          return <Java />
          break;
        case 'php':
          return <Php />
          break;
        case 'igoalo':
          return <Igoalo />
          break;
        case 'other':
          return <Other />
          break;
        case 'ocwebtech':
          return <OcWebTech />
          break;
        default: return ''

      }
    }
    return(
      <div class="content">
        <div class="about_main_block">
          {determineComponent(project)}
        </div>
      </div>
    )
  }

}
