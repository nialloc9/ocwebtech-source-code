import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/php.jpg" className="portfolio_block_image_summary" alt="php image"/>
              </div>
              <br /><br />

              <p>
                PHP is a server side language that is very useful for web development. I like PHP because of it simple to set up and it is supported by most hosts. Also the code if wrote correctly can be very clean and
                readable. This is a big plus in my opinion. Readability is often shunned in favour of functionality but I believe good code has both. It becomes even more important if working as part of a team or releasing code
                to be used by others because if they struggle to read it they will struggle to use it.
              </p>

              <br /><br />

              <p>
                Here I will showcase some of my portfolio work in backend web development using PHP. I will show scripts for different uses. These have all been written in full by me. If you have any feedback to give please
                contact me because your feedback helps me improve this site and my projects.
              </p>

            </div>
          </div>
      </div>
    )
  }
}
