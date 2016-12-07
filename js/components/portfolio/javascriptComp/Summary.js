import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/javascript.png" className="portfolio_block_image_summary" alt="javasript image"/>
              </div>
              <br /><br />

              <p>
                Here we will look at some javascript projects that I completed. Javascript is my language of choice and hopefully you
                will find these projects rich in detail and to your liking. Some of these projects are wrote in es5 while others are
                wrote using es6 and compiled back to es5 using a compiler. Included will be projects that use prototypal inheritance and
                revealing patterns. An example of the use of a pubsub will also be included. All the source code will be available on
                github and I will provide links where appropriate.
              </p>

              <br /><br />

              <p>
                As I said javascript is my language of choice. This is because I love the feel of the language. I love how it can be intuitive
                and maddening at the same time. I love how it is adaptable while at the same time lending structure to the mix. But most
                of all I love how it can be used to make truly beautiful things.
              </p>

              <br /><br />

              <p>
                If you want to hear my more of my thoughts on javascript and look at some cool tricks I have come across on the javascript path
                go check out javascript under the languages section of the site. And as always if you have any suggestions on how to
                improve or comments you wish to make please don’t hesitate to send me a quick email. Feedback is always super awesome.
              </p>
            </div>
          </div>
      </div>
    )
  }
}
