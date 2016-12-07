import React from 'react'

export default class FirstBlock extends React.Component{

  //render to the screen
  render(){
    return(
      <div class="block1_wrapper">
      <div class="block1">
          <div class="row">
              <div class="col-sm-6">
                  <div class="block1_col1">
                      <p class="index_title">OCWebTech</p>
                  </div>
              </div>

              <div class="col-sm-6">
                  <div class="block2_col2">

                  </div>
              </div>
          </div>

          <div class="row">
              <div class="logo_area_wrapper">
                  <div class="logo_area">
                      <p class="logo">
                          <img class="logo_image" src="../../../resources/images/oc_logo_blue_bg.png" alt="oc web tech logo"/>
                      </p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
