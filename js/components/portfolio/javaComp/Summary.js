import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/java.jpg" className="portfolio_block_image_summary" alt="java image"/>
              </div>
              <br /><br />

              <p>
                Java is a language I really enjoy. It is an extremely powerful language that can be used for nearly every project.
                I will show some of my work in java but there is more available on my github page if you wish. Java is an immensely powerful and huge language so in every project, something new is learned.
              </p>

              <br /><br />

              <p>
                Here I want to show three projects. A java 2D game created using the slick2D library, a calculator, and lastly a java instant messenger. These projects I created to try out some of the awesome
                features in java such as sockets and swing components. I hope you enjoy these projects and any feedback is always welcome so please send me an email or find me on <a href="https://ie.linkedin.com/in/nialloconnor3">linkedin</a>.
              </p>
            </div>
          </div>
      </div>
    )
  }
}
