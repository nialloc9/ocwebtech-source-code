import React from 'react'
import { connect } from 'react-redux'

//import blocks
import FirstBlock from '../components/about/FirstBlock'
import SecBlock from '../components/about/SecBlock'
import ThirdBlock from '../components/about/ThirdBlock'
import FourthBlock from '../components/about/FourthBlock'

//connect to store
@connect((store)=>{
  return {
    store:store
  }
})

export default class About extends React.Component{

  render(){
    return(
      <div class="content">
        <div class="about_main_block">
          <FirstBlock />
          <SecBlock />
          <ThirdBlock />
          <FourthBlock />
        </div>
      </div>
    )
  }

}
