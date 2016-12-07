import React from 'react'

import { Carousel } from 'react-bootstrap'

export default class FSWB extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/fullScreenLanding/landingPage.png" className="portfolio_block_image_summary" alt="picture of killarney hotel full screen landing page"/>
              </div>
              <br /><br />

              <p>
                Killarney hotel is a fictional hotel that I created a webpage for to show off full screen landing pages and show how beautiful web pages
                can be if created correctly. I really like full screen background images and how they make a site really stand out. The most impressive
                sites I have ever seen utilize full screen pages very well.
              </p>

              <br /><br />

              <p>
                This site was created for a University project. I wanted to make some that really stood out and had that “wow” factor. I have seen lots of
                family owned businesses that have terrible websites that can really damage reputation if a customer goes to their website to see a poorly designed
                site.
              </p>

              <br /><br />

              <p>
                Source Code: <a href="https://github.com/nialloc9/full-screen-web-pages">GitHub</a><br />
              Site: <a href="http://killarneyhotel.000webhostapp.com/">Link</a>
              </p>

              <br /><br />

              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/fullScreenLanding/scroll.png" className="portfolio_block_image_summary" alt="picture of killarney hotel page with scroll bar"/>
              </div>

              <br />
              <p>Page with scroll bar.</p>

              <br /><br />

              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/fullScreenLanding/noScroll.png" className="portfolio_block_image_summary" alt="picture of killarney hotel page without scroll bar"/>
              </div>

              <br />
              <p>Page with scroll bar removed.</p>

              <br /><br />

              <p>
                In my opinion the scroll bar is one of the ugliest features on a website. It makes an otherwise smooth looking website look old and clunky. This is why unless the web page is
                going to have lots of content that the user will actually need the scroll bar then it makes little sense to keep it. In the website Killarney Hotel
                the pages are not very long so there is no real need for a scroll bar and to add one really destroys the look and feel of the page. Above you can
                see what I am referring to. The first image has a scroll bar and you can see how clunky it looks while the image on the right does not and it
                looks so much better.
              </p>

              <br /><br />

              <p>
                Let’s look at some code examples:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    /* Remove scroll bar */
    ::-webkit-scrollbar {
        display: none;
    }

    body {
        background: url(../resources/images/singleSuite.jpg) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                To remove the scroll bar we need to set its display to none so it does not show.
                This is an awesome trick that I am really happy I learned. It makes webpages look so much slicker. Now let’s look at how to get that image to
                fill the whole screen since we have removed the scroll bar and want it to cover everything. We set the background to cover the whole page for
                all the different browsers and then to set the background size to cover. Finished! In 10 of code the site has really taken a step up.
              </p>

              <br /><br />

                <Carousel>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="landing page" src="../../../resources/images/projects/fullScreenLanding/landingPage.png"/>
                    <Carousel.Caption>
                      <h3>Landing Page</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="about page" src="../../../resources/images/projects/fullScreenLanding/about.png"/>
                    <Carousel.Caption>
                      <h3>About Page</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="Location page" src="../../../resources/images/projects/fullScreenLanding/location.png"/>
                    <Carousel.Caption>
                      <h3>Location Page</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="Rooms page" src="../../../resources/images/projects/fullScreenLanding/rooms.png"/>
                    <Carousel.Caption>
                      <h3>Rooms Page</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="kings suite page" src="../../../resources/images/projects/fullScreenLanding/kingSuite.png"/>
                    <Carousel.Caption>
                      <h3>Kings Suite</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="queens suite page" src="../../../resources/images/projects/fullScreenLanding/queenSuite.png"/>
                    <Carousel.Caption>
                      <h3>Queens Suite</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="double suite page" src="../../../resources/images/projects/fullScreenLanding/doubleSuite.png"/>
                    <Carousel.Caption>
                      <h3>Double Suite</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="single suite page" src="../../../resources/images/projects/fullScreenLanding/singleSuite.png"/>
                    <Carousel.Caption>
                      <h3>Single Suite</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="double room page" src="../../../resources/images/projects/fullScreenLanding/doubleRoom.png"/>
                    <Carousel.Caption>
                      <h3>Double Room</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="single room page" src="../../../resources/images/projects/fullScreenLanding/singleRoom.png"/>
                    <Carousel.Caption>
                      <h3>Single Room</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img className="portfolio_carousel_image" alt="single room page" src="../../../resources/images/projects/fullScreenLanding/contact.png"/>
                    <Carousel.Caption>
                      <h3>Contact</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
            </div>
          </div>
      </div>
    )
  }
}
