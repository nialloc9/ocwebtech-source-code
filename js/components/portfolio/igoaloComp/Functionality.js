import React from 'react'

export default class Functionality extends React.Component{
    render(){
      return(
          <div class="portfolio_block_wrapper">
            <div class="portfolio_block">
              <div className="igoaloFunctionality">
                  <img src="../../../resources/images/projects/igoalo/home_page2.png" className="portfolio_block_image" alt="igoalo use home page image"/>
                  <br /><br />
                  <p>
                     iGoalo.com is full of functionality some unique some more common but
                     all is designed by Niall O’ Connor. The functionality in this site is
                     the most interesting part of it in my opinion.  Let’s look at some of the
                     functionality below:
                 </p>
                 <br /><br />
                 <h3>Registration</h3>
                 <img src="../../../resources/images/projects/igoalo/landing_page.png" className="portfolio_block_image" alt="igoalo landing page image"/>
                 <br /><br />
                 <p>
                     Registration of users is very important. While reading a book on web
                     development I read that users are less likely to sign up to a website if
                     they see a really long form. So taking this knowledge and applying it to
                     the landing page a small form that asks for just name and email address.
                     This then passes that and the user is redirected to the main registration
                     page where their previous data is inputted in the appropriate fields and
                     the remaining fields the user must fill out. This technique allows the user
                     to complete the registration in steps  so therefore abiding by the
                     principle discussed above. Upon successful registration the users account
                     will be locked until they confirm their email address using the email sent
                     to the provided address. The user will be prompted to do this and again
                     each time they try log in(which they will be prevented from).
                 </p>

                 <br /><br />
                 <h3>Login</h3>
                 <img src="../../../resources/images/projects/igoalo/login.png" className="portfolio_block_image" alt="igoalo login image"/>
                 <br /><br />

                 <p>
                     Logging the user in is one of the most important stages in an application.
                     What seems like a simple task is anything but. When you take into account things
                     such as CSRF attacks as well as sql injection and other security issues it gets a
                     lot more complicated. Then what if the user forgets their password? Or what about
                     input verification? As you can see a simple task has now got a lot more complicated.
                     iGoalo incorporates functionality to deal with all of these issues.
                 </p>

                 <br /><br />
                 <h3>Timeline and user wall</h3>
                 <img src="../../../resources/images/projects/igoalo/home_page.png" className="portfolio_block_image" alt="igoalo home page image"/>
                 <br /><br />

                 <p>
                     It’s important to distinguish the difference here. The timeline is where the user
                     can see their groups and friends activities where the user wall is their own personal
                     iGoalo wall with just statuses and goals relating to them on it.
                     <br /><br />

                     Both of these incorporate infinite scroll so the user can keep scrolling and it will
                     load more statuses when they get to the bottom of the page. This is an essential
                     feature in my opinion for modern post functionality. The statuses in both of these
                     are only editable or erasable to the authorized user(the user who made it). However,
                     the user can delete any post that is on their personal wall but cannot edit them.
                 </p>

                 <br /><br />
                 <h3>Friendships</h3>
                 <img src="../../../resources/images/projects/igoalo/friends.png" className="portfolio_block_image" alt="igoalo user friends image"/>
                 <br /><br />

                 <p>
                     Bringing together people of likeminded goals is the core fundamental of iGoalo.
                     Friendships often occur between these people so friendship functionality is a must.
                     iGoalo includes functionality to request, receive, cancel requests, and delete
                     friends. It is important to note here that a user’s personal page is only viewable
                     to friends as well as the instant messenger.
                 </p>

                 <br /><br />
                 <h3>Goals</h3>
                 <img src="../../../resources/images/projects/igoalo/goal.png" className="portfolio_block_image" alt="igoalo user goals image"/>
                 <br /><br />

                 <p>
                     The main way of finding your new social network is by shared goals. If the wants to learn Chinese they will create a goal with
                     10 steps to fulfilling that goal. The goals can be updated each time the user
                     completes that part and the percentage completed will update which in turn updates
                     the progress bar. These steps can be seen in a dropdown upon clicking the goal.
                     Below, you will see how these goals are used to find groups and users to add to
                     your new social circle.
                 </p>

                 <br /><br />
                 <h3>Groups</h3>
                 <img src="../../../resources/images/projects/igoalo/group_page.png" className="portfolio_block_image" alt="igoalo group image"/>
                 <br /><br />

                 <p>
                     The main way of finding your new social network is by shared goals. If the wants to learn Chinese they will create a goal with
                     10 steps to fulfilling that goal. The goals can be updated each time the user
                     completes that part and the percentage completed will update which in turn updates
                     the progress bar. These steps can be seen in a dropdown upon clicking the goal.
                     Below, you will see how these goals are used to find groups and users to add to
                     your new social circle.
                 </p>

                 <br /><br />
                 <h3>Recommendations</h3>
                 <img src="../../../resources/images/projects/igoalo/group_recommendation.png" className="portfolio_block_image" alt="igoalo group image"/>
                 <br /><br />

                 <p>
                     iGoalo uses it’s unique functionality to recommend groups and people to join and friend based on similar goals. It looks at the
                     area the user is in and recommends based on closest first. So if user 1 has a goal
                     to get fit groups such as fitness or sports groups will be recommended. The first
                     groups recommended will be the closest and iGoalo will stretch out to find other
                     groups and people that are based further away.
                 </p>

                 <br /><br />
                 <h3>Instant Messenger</h3>
                 <img src="../../../resources/images/projects/igoalo/chat.png" className="portfolio_block_image" alt="igoalo instant messenger image"/>
                 <br /><br />

                 <p>
                     iGoalo uses it’s unique functionality to recommend groups and people to join and friend based on similar goals. It looks at the
                     area the user is in and recommends based on closest first. So if user 1 has a goal
                     to get fit groups such as fitness or sports groups will be recommended. The first
                     groups recommended will be the closest and iGoalo will stretch out to find other
                     groups and people that are based further away.
                 </p>

                 <br /><br />
                 <h3>Notifications</h3>
                 <img src="../../../resources/images/projects/igoalo/notifications.png" className="portfolio_block_image" alt="igoalo notifications image"/>
                 <br /><br />

                 <p>
                     For a social network it is important to be made aware of pressing matters in your circle. To do this iGoalo gives notifications for messages,
                      friend requests, posts, group alerts, and admin alerts(for those that are admins).
                      The notification icon or the messaging icon will turn red and a beep will be
                      emitted from the device to signal to the user they have a received a notification
                      or message. This is all done live so the user does not need to refresh their page
                 </p>

              </div>
            </div>
          </div>
      )
    }
}
