import React from 'react'
import { Carousel } from 'react-bootstrap'
export default class Images extends React.Component{
    render(){
      return(
          <div class="portfolio_block_wrapper">
            <div class="portfolio_block">
              <div className="igoaloImages">
                <br /><br />
                  <Carousel>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="igoalo landing page" src="../../../resources/images/projects/igoalo/landing_page.png"/>
                      <Carousel.Caption>
                        <h3>Achieving goals together</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="igoalo login" src="../../../resources/images/projects/igoalo/login.png"/>
                      <Carousel.Caption>
                        <h3>Login</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="forgotton password image" src="../../../resources/images/projects/igoalo/forgotton_password.png"/>
                      <Carousel.Caption>
                        <h3>Forgotton password</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="Forgotton password email image" src="../../../resources/images/projects/igoalo/forgotton_pass_email.png"/>
                      <Carousel.Caption>
                        <h3>Forgotton password email</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="Password reset image" src="../../../resources/images/projects/igoalo/password_reset.png"/>
                      <Carousel.Caption>
                        <h3>Password reset</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="Home page image" src="../../../resources/images/projects/igoalo/home_page.png"/>
                      <Carousel.Caption>
                        <h3>Home page</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="home page 2 image" src="../../../resources/images/projects/igoalo/home_page2.png"/>
                      <Carousel.Caption>
                        <h3>Home page 2</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="notifications image" src="../../../resources/images/projects/igoalo/notifications.png"/>
                      <Carousel.Caption>
                        <h3>Notifications</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="chat image" src="../../../resources/images/projects/igoalo/chat.png"/>
                      <Carousel.Caption>
                        <h3>Chat</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="Group Page Image" src="/../../../resources/images/projects/igoalo/group_page.png"/>
                      <Carousel.Caption>
                        <h3>Group Page</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="friend request image" src="../../../resources/images/projects/igoalo/friend_request.png"/>
                      <Carousel.Caption>
                        <h3>Friend request</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="search image" src="../../../resources/images/projects/igoalo/search.png"/>
                      <Carousel.Caption>
                        <h3>Search</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="portfolio_carousel_image" alt="logout image" src="../../../resources/images/projects/igoalo/logout.png"/>
                      <Carousel.Caption>
                        <h3>Logout</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
              </div>
          </div>
    </div>
      )
    }
}
