import React from 'react'

export default class Javascript extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/languageJavascript.png" className="portfolio_block_image_summary" alt="Picture of javascript"/>
              </div>
              <br /><br />

              <p>
                JavaScript is a language used for multiple reasons such as making web pages interactive. It runs on the client side and doesn’t require constant
                downloads from the servers. It is a language that has been standardized in the ECMAScript specification. Currently es5 is supported by all major
                browsers and a compiler such as babelJs is used to compile from es6 and es7 back to es5 so it is runnable in the browser.
              </p>

              <br /><br />

              <p>
                Currently I write all my JavaScript code in es6 and compile it using BabelJs. On a daily basis I use nodeJs dependency manager to handle all my project dependencies. Webpack to handle module loading and BabelJs to compile from es6 to es5.
              </p>

              <br /><br />

              <p>
                I have an excellent understanding of es5, es6, and some es7 features. Competent using the reactJs library, redux framework, and flux architecture
                while also having an understanding of angular and angular2. I have considerable experience using jQuery and jQueryUI. For handling http requests
                I am familiar with using axios. Also other packages and libraries such as MustacheJs. When writing JS code I usually try to decide what the
                project needs are when deciding on what framework or library to use (if any). Recently, I use a lot of es6 features and axios to handle my
                http requests while for this site I used reactJs, axios, and redux. Every project is different so having multiple JavaScript tools to
                choose from is extremely helpful.
              </p>


            </div>
      </div>
    )
  }
}
