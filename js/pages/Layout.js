import React from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/nav/NavBar'

//connect decorator.. gets data from store
@connect((store)=>{
  return {
    store:store
  }
})

class Layout extends React.Component{

  //render to the page
  render(){

    //destructure store
    const { navBar } = this.props.store

    return(
      <div>
        <NavBar store={navBar}/>
        <div class="content">
          <div class="index_main_body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

}

export default Layout
