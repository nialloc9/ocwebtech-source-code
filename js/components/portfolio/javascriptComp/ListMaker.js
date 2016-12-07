import React from 'react'

export default class Summary extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/ListMaker/start.png" className="portfolio_block_image_summary" alt="javasript image"/>
              </div>
              <br /><br />

              <p>Source Code: <a href="https://github.com/nialloc9/jsListMakerModule">GitHub</a></p>

              <br /><br />
              
              <p>
                This is a really cool project that uses moustacheJs, jQuery, and a pubsub to create a module that be added to an existing or new project seamlessly and allow other modules
                to ‘subscribe’ to it so  they listen for changes in it. The project was originally created using webpack to load the modules but I decided to put everything into one script
                too for anyone who wishes to use it without a module loader too. We will be looking at the module loader version but if you want you can find the version with no module loader
                <a href="https://github.com/nialloc9/jsListMakerModule/blob/master/src/js/toListNoModuleLoader.js"> here</a>.
              </p>

              <br /><br />

              <p>
                So let’s get started the first thing is import all the dependencies required which was moustacheJs and jQuery. Next was to add the pubsub. Pubsub actually means publish subscribe.
                What it means by this is a piece of code that allows us to ‘listen’ for changes in other modules and if there is a change to perform a set of actions. It is a really powerful tool
                and definitely one I would recommend. Below is our pubsub:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
  var pubsub = {
      pubsub: {}, //no events at default

      subscribe: function (eventName, fn) { //get event name and what function you want to happen
          this.pubsub[eventName] = this.pubsub[eventName] || []; //if event already exists
          this.pubsub[eventName].push(fn); //add event to array
      },
      unsubscribe: function(eventName, fn) { //get event name and what function you want to happen
          if (this.pubsub[eventName]) { //check if event is present
              for (var i = 0; i < this.pubsub[eventName].length; i++) {
                  if (this.pubsub[eventName][i] === fn) {
                      this.pubsub[eventName].splice(i, 1);
                      break;
                  }
              }
          }
      },
      publish: function (eventName, data) {
          if (this.pubsub[eventName]) { //check if eventName exists
              this.pubsub[eventName].forEach(function(fn) { //do function for each event
                  fn(data);
              });
          }
      }
  };

  module.exports = pubsub;
  `}
                </pre>
              </div>
              <br /><br  />

              <p>
                As you can see the pubsub is an object that has a property of pubsub. This property is an object that stores the information of what to do if different actions occur. It is an object of different functions
                from different modules that are waiting to see if an event occurs. So we might have an event called ‘INFO_UPDATED’ and then a list of actions we want to occur. If you look at the publish method it loops
                through every action stored in the pubsub with a specified eventName and calls that {`function`} returning data as it’s argument. The subscribe method pushes a new {`functionName`} onto the array where the eventName
                is the same as the eventName we specified or else creates a new array called eventName to push onto. And lastly the unsubscribe method splices our {`function`} from the array when we don’t want to listen anymore.
                The power of this and applications for it is huge because now we can have modules that are listening to changes in other modules.
              </p>

              <br /><br />

              <p>
                Next let’s look at our js for the actual list maker:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
  var list = (function () {

      //dependencies
      var $ = require('jquery');
      var Mustache = require('mustache');
      var pubsub = require('./pubsub');

      //default list
      var list = ['a', 'b'];

      //cache DOM
      var $el = $('#addToListModule');
      var $input = $el.find('input');
      var $btn = $el.find('#addToListBtn');
      var $ul = $el.find('ul');
      var template = $el.find('#addToListTemplate').html();

      //bind events
      $btn.on('click', addToList);
      $ul.on('click', 'i.del', deleteFromList);

      _render();

      function addToList(listItem) {
          var item = (typeof listItem === "string") ? listItem: $input.val();
          list.push(item);
          _render();
          pubsub.publish("listChanged", list.length);
          $input.val('');
      }

      function deleteFromList(e){
          var i;
          if(typeof e === "number"){
              i = e;
          }else{
              var $remove = $(e.target).closest('li');
              i = $ul.find('li').index($remove);
          }

          list.splice(i, 1); //remove 1 with index of i

          _render();
          pubsub.publish("listChanged", list.length);

      }

      function subscribe(functionName){
          pubsub.subscribe("listChanged", functionName);
      }

      function unsubscribe(functionName){
          pubsub.unsubscribe("listChanged", functionName);
      }

      function returnList(){
          return list;
      }

      //private function
      function _render() {
          $ul.html(Mustache.render(template, {list: list}));
      }

      //api
      return{
          addToList: addToList,
          deleteFromList: deleteFromList,
          subscribe: subscribe,
          unsubscribe: unsubscribe,
          returnList: returnList
      }
  })();

  module.exports = list;
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                So now we must do our dependencies. We require(import is an ES6 feature) jQuery and mustache. Mustache is a convenient tool that allows us to easily output data held in json or array objects to the screen where
                needed. We will be using it to bind data to our template.
              </p>

              <br /><br />

              <p>
                First we are caching out DOM elements and using the jQuery method find to get our other elements. It’s always a good idea to cache the DOM elements if you will use them multiple times. If you look at the
                addToList method we have 2 options. First we check to see if the type of value passed as a parameter is a string. If it is not we go to the input and get it’s value. This is so we can manually add in values
                with addToList(someValue) and also call it normally with addToList(). This is then pushed onto our array as a value and the module is re-rendered to the screen but also the pubsub publish method is called to
                let any listening modules know that this module has changed. The deleteFromList works the same but removes from the list while also re rendering and publishing. It removes the item from the list by looking at
                where the click event happened and removing the closest li.
              </p>

              <br /><br />

              <p>
                The really cool part about using a revealing pattern to write this code is that it has it’s own scope. So we cannot call list._render() from outside of the scope. This is done by writing our code in a self-executing
                anonymous {`function`}. The awesome part of doing this is now we can choose what methods we want to be available in our api to the developer using this. So if we look at what is returned we can see a list of methods
                but no _render method. So if the developer trys use list._render() it won’t work as it not available outside the scope. What is available are the methods returned in the object.
              </p>

              <br /><br />

              <p>
                Lastly here is the template html code to be used. If you see the type we gave to the script tags it is text/template. This is really useful as none of the html inside these tags will be printed out and we can
                use it as a template for when we want to print to the screen like we did with our list. Important to note if using MustacheJs we must use the same word in the curly brackets in the template as the array/json
                object we keep our data in.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
  <script id="addToListTemplate" type="text/template">
    {{#list}}
      <li>
        <span>{{.}}</span>
        <i class="del">X</i>
      </li>
    {{/list}}
  </script>
  `}
                </pre>
              </div>

              <br /><br />
              <p>
                Revealing patterns are very useful and pubsubs are very powerful so I hope you enjoyed this project and please any feedback is welcome.
              </p>
            </div>
          </div>
      </div>
    )
  }
}
