import React from 'react'

export default class Captcha extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/captcha/start.png" className="portfolio_block_image_summary" alt="javasript image"/>
              </div>

              <p>
                Here we will look at two examples of a captcha image generator and checker project. The first will be using es5
                javscript and the jQuery library. And the second will be using vanilla es6 javascript. Why two projects you might
                be wondering? Surely he could of just made one?
              </p>

              <br /><br />

              <p>
                Well yes, originally I made the es5 version with jQuery but I believe that it is always good to know different ways
                of doing the same thing. This, plus I believe the project could be improved using es6 features and removing the jQuery
                dependency motivated me to upgrade it to a newer version. The source code for both is available on github:
                <br /><br />
                <a href="https://github.com/nialloc9/csrfProtection">ES5 With jQuery Version</a>
                <br />
                <a href="https://github.com/nialloc9/es6CaptchaGenAndChecker">ES6 Version</a>
              </p>
              <br /><br />

              <p>
                So when starting out on a new project I find it is always good to sit down and look at what needs to be done? So for a
                captha image generator we need to generate a random number that is stored someone secure where the user can’t access it.
                This is really important so that the user can’t change the number or access it in anyway. Next, we need a way of checking
                that number is the same as the inputted one, a way to re-generate that number each time and we also need that number to be
                turned into an image with something to hide the number from bots. And lastly we need a way of outputting that image to the
                screen so the user can see it.
              </p>

              <br /><br />

              <p>
                After considering what is needed we know we need some backend code and frontend code that will be used to access the backend.
                In this we will focus on the frontend. The backend will be provided but we will speak in more detail about the front end.
                Check out the php portfolio to see more detail on how the backend works.
              </p>

              <br /><br />

              <p>
                  Let’s look at the code to create a captha image using es5 and jQuery:
              </p>

              <br /><br />

              <div className="codeBlock">
                 <pre>
{`
  //CREATE CAPTCHA FUNCTION
  function createCaptcha(captchaAreaId, captchaNumberInputId, captchaSessionName, pathToCheckCreateCaptchaSession, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass, callBackFunction){

      //assign variable
      var areaId = '#' + captchaAreaId;

      //http request
      $.get(
          pathToCheckCreateCaptchaSession,
          {
              task: 'createCapthcaSession',
              name: captchaSessionName
          }
      ).
          error(function(){
              console.log('ERROR: createCaptha() http request failure in createCapthcaImage.http.js');
          }).
          success(function(data){

              //assign variable
              var result = false;

              if(data == 1){
                  console.log('SUCCESS: captcha value ' + data +' found. Creating capthca session..');
                  addCaptcha(captchaAreaId, captchaNumberInputId, pathToCreateImagePhp, newCaptchaImageId, newCaptchaImageClass);

                  result = true;
              }else{
                  console.log('ERROR: creating capthca session');
              }

              //callback function
              if(callBackFunction != ''){
                  callBackFunction(result);
              }
          });
  }
  `}
                 </pre>
              </div>

              <br /><br />

              <p>
                  As you can see the {`function`} takes a lot of arguments. Eight in fact. Not all of these are required though. The call back {`function`} is optional as you can see at the end it checks if there is a callback
                  {`function`} passed in and if there is calls it with the result of the ajax call passed as an argument. This is used to check the data passed back from the backend after it is added successfully to the DOM. The
                  backend here passes back a 1 or 0 value. If 1 the session data was created successfully.

                  Let’s look at the other parameters. The capthchaAreaId is where the image will appear, captchaNumberInputId is the id of the input the user will use to enter the image number, and the captchaSessionName is the
                  name we want to give the session. After this, the pathToCheckCreateCaptchaSession and the pathToCreateImagePhp are the paths to these files inside the developers folder structure. Lastly, newCaptchaImageId and
                  newCaptchaImage {`class`} are the id and {`class`} we want the new image to have while we already discussed the callbackFunction. As you can see the data is returned from the ajax call is not actually passed into
                  our callback {`function`}. Before this it is passed into a {`function`} called addCaptcha that is used to add the image to the DOM. This then returns a result variable. Initially this variable is set to false and
                  is changed to true if we successfully add the image to the DOM. This is important for separation of concerns because one {`function`} is concerned with creating the Session and the other is concerned with outputting.
                  If there is a problem found later on it will make detecting it easier.

                  The second {`function`}  available to us is the addCaptcha {`function`}:
              </p>

              <div className="codeBlock">
                <pre>
{`
  //ADD IMAGE TO ELEMENT
  function addCaptcha(captchaAreaId, captchaNumberInputId, pathToCheckCreateImagePhp, newCaptchaImageId, newCaptchaImageClass){

      //assign variables
      var areaId = '#' + captchaAreaId;
      var inputArea = '#' + captchaNumberInputId;

      //add image
      $(areaId).html('<img src="' + pathToCheckCreateImagePhp + '?' + (new Date().getTime()) +'" alt="security code" id="'+ newCaptchaImageId +'" class="'+ newCaptchaImageClass + '"/>');

      //clear input
      $(inputArea).val('');
  }
  `}
                </pre>
              </div>
              <br /><br />

              <p>
                  As you can see it takes 6 parameters. These are the same as the ones passed in above to the createCaptcha {`function`}. Now, to sprinkle some magic on this. The reason we create a new date above and add it to end of the src is that we want to access a new instance of this script each time. This is important if the script is in use somewhere else too.

                  Now the last {`function`} availale to us is the checkCaptcha {`function`}:
              </p>

              <div className="codeBlock">
<pre>
{`
  //CHECK CAPTCHA SESSION
  function checkCaptcha(pathToCheckCreateImagePhp, captchaName, userInputId, callBackFunction){

      //assign variables
      var id = '#' + userInputId;
      var userVal = $(id).val();

      $.get(
          pathToCheckCreateImagePhp,
          {
              task: 'checkCaptchaSession',
              userInput: userVal,
              name: captchaName
          }
      ).
          error(function(){
              console.log('ERROR: checking capthca session');
          }).
          success(function(data){
              //assign variable
              var result = false;

              console.log('SUCCESS: checking capthca session.. returned: ' + data);

              //data check
              if(data == 1){
                  console.log("SUCCESS: Captcha session and user data match.");

                  //change result
                  result = true;
              }else{
                  console.log("ERROR: Captcha session and user data do not match.");
              }

              //callback function
              if(callBackFunction != ''){
                  callBackFunction(result);
              }
          });
  }

  `}
</pre>
              </div>
              <br /><br />

              <p>
                  As you can see pathToCheckCreateImagePhp and userInputId and callbackFuntion hace the same operation as in the other functions but we have one new addition here. The captchaName is the name that we gave our
                  session variable when we created it using the capthcaSessionName parameter in the createCaptchaImage {`function`}. An ajax request is called to the backend to check if the user user inputted value is equal to the
                  value in the session named by the argument capthcaName.
              </p>

              <br /><br />

              <p>
                  Now let’s look at the es6 vanilla js equivalent of this:
              </p>

              <br /><br />
              <div className="codeBlock">
                <pre>
{`
  import axios from 'axios';

  class Captcha{

      constructor(pathToCreateCheck){

          //set path
          this.path = pathToCreateCheck;

      }

      //create captcha session
      create({name, callback}){
          axios.get(this.path, {
              params:{
                  task: 'createCapthcaSession',
                  name,
              }
          }).then((response)=>{
              if(callback !== '' && callback !==undefined){
                  callback(response);
              }
          }).catch((error)=>{
              console.log(error);
          })
      }

      //add capthca image to screen
      add({imgAreaId, inputId, newImgId, newImgClass, pathToImage}){

          //cache the DOM
          const imgAId = document.getElementById(imgAreaId);
          const input = document.getElementById(inputId);

          //remove previous html
          while (imgAId.hasChildNodes()) {
              imgAId.removeChild(imgAId.firstChild);
          }

          //add image to DOM
          var x = document.createElement("IMG");
              x.setAttribute("src", pathToImage + '?' + Date.now());
              x.setAttribute("class", newImgClass);
              x.setAttribute("width", "50%");
              x.setAttribute("alt", "security code");
              imgAId.appendChild(x);

      }

      //check user input = captcha image number
      check({name, input, callback}){
          axios.get(this.path, {
              params:{
                  task: 'checkCaptchaSession',
                  input,
                  name,
              }
          }).then((response)=>{
              if(callback !== '' && callback !==undefined){
                  callback(response);
              }
              }).catch((error)=>{
                  console.log(error);
              });
      }
  }

  export default Captcha;
  `}
                </pre>
              </div>
              <br /><br />

              <p>
                  The first thing to note here is that it is now a {`class`}. The {`class`} keyword is a new addition to es6. We are usng axios to handle our ajax requests. Also notice we now have a {`constructor`}. If you remember in the
                  es5 version we needed the path to the checkCreateImagePhp file in all of our functions so by adding it in the {`constructor`} it is now available to all of our methods and only has to be declared once. Now, to
                  the next awesome part of es6 we are taking advantage of here. If you notice we are passing in objects as the arguments. Using es6 when we call these methods we would pass in an object with properties of name
                  and callback but if we decided to just pass in name and not callback we could and it wouldn’t throw an error. These parameters are named parameters so they are linked to their name not the order they are passed
                  in. If you look inside the add method we no longer have that ugly html element with the concatenation that we had in es5 we now can now create an element and set the attributes for it individually. This makes it
                  much easier to read and sport problems.  Lastly the number of arguments passed into each method has decreased significantly, from eight to two in create!
              </p>

              <br /><br />

                <br /><br />

                <p>
                    I really think es6 is awesome and I never even showed two of my favourite things about es6 arrow functions and de structuring but examples of these can be seen in other projects available in my portfolio.
                    Thanks for taking the time to read this and I hope you enjoyed.
                </p>
            </div>
          </div>
      </div>
    )
  }
}
