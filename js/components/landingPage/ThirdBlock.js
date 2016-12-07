import React from 'react'

export default class ThirdBlock extends React.Component{

  //render
  render(){
    return(
      <div class="block3_wrapper">
        <div class="block3">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="block3_main_area_title">WELCOME...</h1>
                    <div class="block3_main_area_wrapper">
                        <div class="block3_main_body">
                            <video class="block3_main_video" width="100%" height="480" controls>
                              <source src="../../../resources/videos/what_does_ocwebtech_do.mp4" alt="Welcome video" type="video/mp4" />
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }

}
