import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/lightBulb.jpg" className="portfolio_block_image_summary" alt="picture of lightbulbs with one on implying it's differant"/>
              </div>
              <br /><br />

              <p>
                Sometimes awesome things come in different forms. Here we will see other projects that don’t fall under the umbrella of any of the other categories
                or like in the API case are not just used by one programming language but can be used by many.
              </p>

              <br /><br />

              <p>
                I will show examples of full screen landing pages and full screen webpages in general. Also we will look at some navigation systems that
                I created that include css, js, and html. CSS is a language that in my opinion is overlooked by software developers. While granted most
                software developers are able to do some CSS, it tends to lack behind their other skills which focus more on functionality than
                presentation.  Lastly we will look at some really awesome rest API’S.
              </p>

              <br /><br />

            </div>
          </div>
      </div>
    )
  }
}
