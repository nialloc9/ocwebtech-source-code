import React from 'react'

export default class ThingsILike extends React.Component{

  render(){
    return(
      <div class="content">
        <div class="about_main_block">

            <div class="portfolio_block_wrapper">
                <div class="portfolio_block">
                  <div className="javascriptSummary">
                    <div className="portfolio_block_image_summary_wrapper">
                      <img src="../../resources/images/like.png" className="portfolio_block_image_summary" alt="like image"/>
                    </div>
                    <br /><br />

                    <h3>IDE's</h3>
                    <p>
                      IDE and editors and the choice of which to use is very important. Text editors usually go for a broader approach while IDE
                      (Integrated Development Enviroment) tend to be a specific type or language. IDE’s are not just tools for writing or reading
                      code but can also compile and debug it. While it is true editors can get plugins to that compile, run, and debug it isn’t
                      integrated. For writing JAVA code I usually go with netbeans IDE. I like netbeans and to be honest I think it is just a personal choice of
                      what IDE to use for JAVA. Mine just happens to be netbeans. When writing PHP this can be done in an editor but I prefer to use to use JetBrains PHPStorm. I like the highlighting of code and the
                      refactoring tools provided. However, I do sometimes still write PHP using editors especially if I am already writing code in the editor
                      and want to only write a small amount of PHP code.
                    </p>

                    <h3>Editors</h3>

                    <p>
                      After playing around with a few editors such as notepad++ and brackets I have recently settled on atom. Brackets was awesome and a really nice
                      editor but I decided to go with atom because it was easy to set up and is super customizable. Again as with the IDE’s for JAVA it is totally a
                      preference.
                    </p>

                    <br /><br />

                    <h3>Version Control</h3>


                    <p>
                      For version control I actually use two. GitHub and BitBucket. I like the two of these for different reasons. GitHub has free public repositories and
                      is pretty much used by most programmers but bitbucket allows unlimited free private repositories. I use GitHub for my portfolio projects and
                      bitbucket for any repository I wish to keep but keep private. Both are really awesome.
                    </p>

                    <br /><br />

                    <h3>Publications and podcasts</h3>

                    <p>JavaScript Weekly</p><br />
                    <p>DB Weekly </p><br />
                    <p>The Programming Throwdown podcast</p><br />
                    <p>SitePen Podcast</p><br />

                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }

}
