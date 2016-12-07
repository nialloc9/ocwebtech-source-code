import React from 'react'

export default class API extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">

              <br /><br />

              <p>
                A REST API (Representational State Transfer Application Programming Interface) defines a set of functions a developer can perform to request and receive responses via HTTP
                protocol such as GET and POST. The really awesome thing about REST API’s is that they can be used by pretty much any programming language.
                If you were reading the full screen landing page portfolio project you may have seen a Google map. This is actually Google’s Maps API. It is a
                really cool API and extremely useful. Think about it every shop, hotel, and pretty much all business websites could do with a map to show where
                they are located. Let’s look at it in action below.
              </p>

              <br /><br />

              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/fullScreenLanding/location.png" className="portfolio_block_image_summary" alt="Picture Of Killarney Hotel Location Page"/>
              </div>
              <br /><br />

              <p>
                Isn’t it awesome how we can use Google’s Mapping API to add a map showing the location of pretty much anywhere in the world? And it’s not even hard
                to do. There are only a few steps. First we need to add in the script for the API.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    <script src="https://maps.googleapis.com/maps/api/js?callback=myMap"></script>
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                Notice how at the end of the src in the script tags for the API there is a callback parameter.
                This is the name of the {`function`} we will call. Then we need to set an area for it to appear:
              </p>

              <br /><br />

              <p>
                Now we need some styling:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    .map{
    max-width:400px;
    height:400px;
    background:black;
    border: solid 3px black;
}
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                And last the callback {`function`} we discussed above.  Let’s look inside this callback {`function`}. First we cache the DOM element that is the
                going to be the mapCanvas. Then we create an object of map options which we has a single property here, a new latitude and longitude object to
                hold the coordinates we want to display on the screen and the amount of zoom we want to have. And finally we output this to the DOM by creating a
                new Map object by passing in the canvass and the options.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
  //create map function
function myMap() {
  var mapCanvas = document.getElementById("map");

  var mapOptions = {
    center: new google.maps.LatLng(52.059954, -9.505980), zoom: 10
  };

  var map = new google.maps.Map(mapCanvas, mapOptions);
}
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                REST API’S are truly amazing and can really improve your applications and add powerful new functionality to them. Take for example social
                media. What if you had an author’s website where he sold books. Wouldn’t it be really cool if we could see tweets about his books or him?
                Well using the twitter API we can.  Or we can get a user’s data from their username from the github API in JSON format. Just send a request
                to the http url like below. This will get my github data.
              </p>

              <br /><br />

              <p>
                {`https://api.github.com/users/nialloc`}
              </p>

            </div>
          </div>
      </div>
    )
  }
}
