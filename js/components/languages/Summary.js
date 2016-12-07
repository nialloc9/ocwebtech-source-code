import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/languagesMain.jpg" className="portfolio_block_image_summary" alt="Picture of multiple languages"/>
              </div>
              <br /><br />

              <p>
                Learning different languages gives us more tools to add to our programming tool belt. It is then up to us to decide which one of these tools is best
                for the job. It might be that we are most familiar with one so that is our ‘go to’ language to use. It might be we got this shiny new one and we
                want to try it out. For whatever reason knowing multiple languages help us create applications in the best possible way.
              </p>

              <br /><br />

              <p>
                For me deciding what to learn next is a big decision because I know that learning a language takes time and as programmer’s time is a luxury. Also
                there is only a certain amount of languages that we can use at the same time so if I am going to learn a new language or framework in an existing
                language I believe research and due diligence is needed first.
              </p>

              <br /><br />

              <p>
                Usually I will spend about a day just researching the different aspects of a technology and looking at what it does well and not so well, comparing
                it to other technologies, and making a decision on what to learn. For me, it’s important to set a time frame to make a decision because there is
                a ton of information out there on every language, library, and framework and you could spend days or even weeks reading through it all.
              </p>
          </div>
      </div>
    )
  }
}
