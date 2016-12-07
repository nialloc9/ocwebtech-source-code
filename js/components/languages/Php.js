import React from 'react'

export default class Php extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/languagePhp.png" className="portfolio_block_image_summary" alt="Picture of php elephant"/>
              </div>
              <br /><br />

              <p>
                PHP is a server side language designed mainly for web development. It is an acronym for “PHP: Hypertext Preprocessor”. PHP scripts are run on the
                server side and allow us control user-access, send and receive cookies, open, read, delete, and write files on the server, along with many other
                awesome things. PHP gives some advantages over Java in that we can use it without the need for other frameworks and environment to run. This is
                the biggest advantage of PHP in my opinion. Also, PHP code for simpler sites tends to be easier to write and read.
              </p>

              <br /><br />

              <p>
                I have been writing code using PHP for several years now and I really like how if wrote correctly it can be simple to read and understand for other
                developers. On the other hand if not wrote with readability as a major concern it can get messy very quickly. This is one language I am happy I
                added to my tool belt and will continue using into the future.
              </p>

              <br /><br />

              <p>
                To a lesser extent and for a time I used the PHP framework laravel. Also I am familiar with using composer as a dependency manager and the artisan
                command line which are incredible powerful tools that real impressed me. Laravel is an awesome framework which I am keen to continue to learn.
              </p>

          </div>
      </div>
    )
  }
}
