import React from 'react'

import ContactImage from '../modals/ContactImage'

export default class FourthBlock extends React.Component{

  //render
  render(){
    return(
      <div class="block4_wrapper">
        <div class="block4">
            <div class="row">
                <div class="col-sm-12">
                    <div class="block2_main_body">
                    <p class="block4_main_area_title">
                        WHO IS NIALL?...
                    </p>
                    <p class="block4_main_area_text_about_me">
                        I am a full stack developer who loves to code and loves to build things.
                        I have been coding for a long time now and I have realised one thing.
                        There is nothing that cannot be built. If there is an idea I and OCWebTech can help you build it.
                        I understand that to really make an idea great is to have someone who believes in it 100%.
                        I believe in all my work. Whether it is the smallest or the biggest project I believe it is worthy of all my attention.
                        So please take some time to look around and lets start making some awesome things together.
                        <br /><br />
                        </p>
                        <div class="logo_images_wrapper">
                            <a href="https://ie.linkedin.com/in/niall-o-connor-133b8767"><img class="logo_images" src="../../../resources/images/linkedin_logo.png" alt="linked in link"/></a>
                        </div>
                        <div class="logo_images_wrapper">
                            <a href="https://plus.google.com/u/0/101913342551711650238/posts/p/pub"><img class="logo_images" src="../../../resources/images/google_plus_logo.png" alt="google plus link"/></a>
                        </div>
                        <div class="logo_images_wrapper">
                            <a href="http://www.igoalo.com/profile_template_user.php?page_id=2"><img class="logo_images" src="../../../resources/images/igoalo_logo.png" alt="igoalo link"/></a>
                        </div>
                        <div class="logo_images_wrapper">
                            <a href="https://github.com/nialloc9"><img class="logo_images" src="../../../resources/images/github_logo.png" alt="github link"/></a>
                        </div>
                        <div class="logo_images_wrapper">
                            <ContactImage />
                        </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
