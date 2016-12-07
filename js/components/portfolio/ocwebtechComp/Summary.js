import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/oc_logo_blue_bg.png" className="portfolio_block_image_summary" alt="oc web tech logo image"/>
              </div>
              <br /><br />

              <p>
                OCWebTech is a developer page created to showcase Niall O’ Connor’s portfolio and talk about interesting things about different aspects
                of programming. The site and all its components are his design and all the code is wrote by him. The site includes pages for the different
                languages where he discusses different aspects of the language. The site is used to showcase portfolio work and there are links to the
                different aspects of the portfolio under the portfolio heading in the nav.
              </p>

              <br /><br />

              <p>
                OCWebTech is created using the ReactJs library and the redux framework to handle state. It is in itself a portfolio project to showcase ReactJs and
                redux. Instead of having a page to supply these projects the site acts as its own. Included in the site are articles relating to Niall and giving
                a more in depth view of the type of person he is. While also supplying his resume and things I like section where he discusses such things as IDE’s
                and web technologies that he likes.
              </p>

              <br /><br />

              <p>
                Source Code: <a href="https://github.com/nialloc9/ocwebtech-source-code">GitHub</a>
              </p>

              <br /><br />
            </div>
          </div>
      </div>
    )
  }
}
