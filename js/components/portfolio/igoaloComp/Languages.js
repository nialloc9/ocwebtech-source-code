import React from 'react'

export default class Languages extends React.Component{
    render(){
      return(
          <div class="portfolio_block_wrapper">
            <div class="portfolio_block">
              <div className="igoaloLanguages">
                <img src="../../../resources/images/coding.jpg" className="portfolio_block_image" alt="picture of person typing code"/>
                <br /><br />
                <p>
                    Most of iGoalo was created using native code. This was chosen to allow for greater flexibility as a lot of this
                    code is unique. Currently I am researching to update the site to use either Angular2 or ReactJs. But as stands,
                    HTML, JavaScript(including jQuery library), SQL, and PHP are the languages used. The styling is done using mostly
                    CSS and the twitter bootstrap framework.
                </p>

                <br /><br />
                <img src="../../../resources/images/javascript.png" className="portfolio_block_image" alt="picture of javascript logo"/>
                <br /><br />
                <h3>JavaScript</h3>
                <p>
                    JavaScript is responsible for the front end and a lot of the really awesome parts of iGoalo. The timelines are the
                    biggest example of this. Upon page load just 20 statuses are available upon view. If we had a static website without
                    JavaScript then each time we wanted to view more statuses we would have to click a button like using static pagination
                    numbers:
                </p>
                <br /><br />
                <img src="../../../resources/images/projects/igoalo/paginationWithNumbers.jpg" className="portfolio_block_image" alt="example of pagination"/>
                <br /><br />
                <p>
                    However, JavaScript gives us the power to dynamically load more statuses and display them to the screen. Not only this
                    but all the newly loaded and old statuses are all available for delete and live edit where a text box appears in its
                    place with the text inside it. The site also incorporates jQuery for much of its functionality such as AJAX requests.
                    jQuery is a very useful library that allows us to do more complicated tasks in JavaScript very quickly such as firing
                    off an AJAX request to get more statuses.  However, I plan to remove jQuery from the project in the future and instead
                    just use vanilla JS along with a framework such as ReactJs or Angular2.
                </p>

                <br /><br />

                <img src="../../../resources/images/php.jpg" className="portfolio_block_image" alt="picture of php logo"/>
                <br /><br />

                <h3>PHP</h3>
                <p>
                    The back end language used is PHP. No frameworks or libraries are used just plain php. The PHP controls the backend for things
                    such as getting data from the database to return when a AJAX request comes in to get more statuses. PHP was a solid choice for
                    this project to keep the backend simple and clean increasing readability as the project grew in size.
                </p>
                <br /><br />

                <img src="../../../resources/images/sql.png" className="portfolio_block_image" alt="picture of sql logo"/>
                <br /><br />

                <h3>SQL</h3>
                <p>
                    SQL is used for the querying of the database. It is used for all things such as adding, updating, and deleting goals, friends,
                    statuses and groups. One very interesting part of SQL is the fact that a full join is not possible so to simulate this which is
                    essential for things such as the timeline when we need to get the user data and the status they created along with maybe the user
                    they posted to or the group they posted in altogether to return to the frontend. Because of this a UNION ALL is used to achieve the
                    same result as if a FULL JOIN was possible.
                </p>
                <br /><br />

                <img src="../../../resources/images/css.jpg" className="portfolio_block_image" alt="picture of CSS logo"/>
                <br /><br />

                <h3>CSS and Twitter Bootstrap</h3>
                <p>
                    CSS is a critical part of any website and iGoalo is no exception. Here bootstrap is used widely for positioning of elements using
                    columns and rows. Other examples of where we can see the bootstrap framework are the buttons, inputs, and the modals used for creating
                    goals and groups. Custom CSS is also widely used to customize elements more. In fact most of the more complicated aspects of iGoalo
                    such as the timelines are nearly completely done in custom CSS with little or no input from Twitter Bootstrap.
                </p>
                <br /><br />
              </div>
            </div>
          </div>
      )
    }
}
