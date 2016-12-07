import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="igoaloSummary">
              <img src="../../../resources/images/projects/igoalo/logo2.png" className="portfolio_block_image_summary" alt="igoalo logo image"/>
              <br /><br />

              <p>
                <a href="http://www.igoalo.com/">iGoalo.com</a> is a social networking site create to take the user out of
                  their existing social circle and put them in the one they want to be in. It does
                  this but taking user created goals and matching them to recommend groups to join and
                  users to friend. This allows users who want to achieve something new to get the
                  support from people trying to achieve the same goals.
              </p>

              <br /><br />
              <p>
                Users create profiles which give them a personal page and a timeline. From
                these the use is able to keep track of what they're new social network is
                doing. The personal pages allow the user to create, edit and delete goals
                as well as groups. It also allows the user to upload photos as statuses and
                to create normal rational text statuses or a combination. All statuses are
                likeable and automatic statuses occur when a user joins or posts in a
                group as well as creating or updating a goal. These automatic statuses
                also extend to when they make new friends.
              </p>

              <br /><br />
              <p>
                Friendships and groups are what the site is based on. The unique functionality
                of the site allows group and friendship recommendations based on the users
                stated goals. This is how the user leaves their current social circle and
                joins the one they wish they were in.
              </p>

              <br /><br />
              <h3>Login details</h3>
              <br />
              <p>
                Please feel free to use the account below if you want to see the site for yourself:
                <br /><br />
                Username: js24 Password: jsmith25
              </p>
            </div>
          </div>
      </div>
    )
  }
}
