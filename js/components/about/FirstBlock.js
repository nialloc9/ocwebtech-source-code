import React from 'react'

export default class FirstBlock extends React.Component{

  //render
  render(){
    return(
      <div class="about_block1">
            <h1 class="about_title">Who is that guy?</h1>
            <div class="about_block1_image_wrapper">
                <img class="about_block1_image" src="../../../resources/images/me1.jpg" alt="Picture of Niall O Connor"/>
            </div>
            <p class="about_block_text">
              My name is Niall O' Connor. I'm from a small town in Ireland called Brosna. I am 25 years old and I love to code...
              <br />
              <br />

              I was once described by a guy I met from Tennessee while traveling as a life learner. See, I love to learn. I understand that learning new things and having new experiences help us grow as people both professionally and personally. Everyday I try to learn something new, sometimes related to work, sometimes not. But I always try to look for new ways to grow.
              <br />
              <br />
            </p>
        </div>
    )

  }

}
