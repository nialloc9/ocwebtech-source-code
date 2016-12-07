import React from 'react'
import { connect } from 'react-redux'

//import blocks
import FirstBlock from '../components/LandingPage/FirstBlock'
import SecBlock from '../components/LandingPage/SecBlock'
import ThirdBlock from '../components/LandingPage/ThirdBlock'
import FourthBlock from '../components/LandingPage/FourthBlock'
import FifthBlock from '../components/LandingPage/FifthBlock'

//connect decorator.. gets data from store
@connect((store)=>{
  return {
    store:store
  }
})

export default class LandingPage extends React.Component{

  render(){

    //destructure store
    const { landingPage } = this.props.store
    
    return(
    <div>
      <FirstBlock />
      <SecBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock store={landingPage.fifthblock}/>
    </div>
    )
  }
}
