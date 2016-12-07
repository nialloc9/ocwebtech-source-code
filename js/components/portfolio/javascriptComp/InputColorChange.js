import React from 'react'

export default class InputColorChange extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/InputColorChange/start.png" className="portfolio_block_image_summary" alt="javasript image"/>
              </div>
              <br /><br />

              <p>
                Source code: <a href="https://github.com/nialloc9/inputBorderColorChange">github</a><br />
                Further example: <a href="https://github.com/nialloc9/addInfoMessage">addiInfoMessage</a>
              </p>

              <br /><br />

              <p>
                Protyotpal inheritance is often confused with classical inheritance. This is because of the use of the keyword prototype in classical inheritance. However, they are different and in my opinion I prefer to use prototypal
                inheritance because I believe it easier to read. When we inherit in JavaScript we create a chain that has a link to the object it inherited from. So when we call a method it will look inside the first object and if it does
                not have that method it will go up the chain to the next object and check in that and so on and so on until it finds the method it is looking for.  For this we will look at how we can use prototypal inheritance to create an
                inputBorderColorChange project that can be ‘inherited ‘ from to give other objects the same methods and properties and also add it’s own new ones without altering the original object. First let’s look at the script:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    var addInputBoxColor = {

        //create
        create: function (values) {

            //check values
            if(values == null || values == undefined){
                values = {};
            }

            //create object
            var instance = Object.create(this);

            //add new methods and properties
            Object.keys(values).forEach(function (key) {
                instance[key] = values[key];
            });

            //return object
            return instance;
        },

        //add
        add: function (boxId, tOrF, positiveClass, negativeClass) {

            //cache DOM
            var $id = $('#' + boxId);

            //BOOLEAN CHECK
            if(tOrF){
                this._render($id, positiveClass, negativeClass);
            }else{
                this._render($id, negativeClass, positiveClass);
            }
        },

        remove: function (boxId, positiveClass, negativeClass) {
            this.add(boxId, true, '', negativeClass);
            this.add(boxId, false, positiveClass, '')
        },

        //_render
        _render: function ($id,addClassName, removeClassName) {
            //CLASS CHECK 1
            if($id.hasClass(removeClassName)){
                $id.removeClass(removeClassName);
                //CLASS CHECK 2
                if($id.hasClass(addClassName)){
                    //DO NOTHING
                }else{ //CLASS CHECK 2 ELSE
                    $id.addClass(addClassName);
                }
            }else{ //CLASS CHECK 1 ELSE
                if($id.hasClass(addClassName)){
                    //DO NOTHING
                }else{
                    $id.addClass(addClassName);
                }
            }
        }
    };

    `}
                </pre>
              </div>

              <br /><br />

              <p>
                As you can see we set a variable to equal to an object. This object has 3 properties that are functions. These are our methods
                that will be available to any other object that ‘inherits’ from this. This project also has a jQuery dependency that is important to note.
                Let’s look at the add, remove and _render methods first. The render method is a method that is intended to be used by the other methods and
                not by the developer so is denoted with _ at the start. You can see how we create scope and only show the methods we want to be available in
                the list maker project in the JavaScript portfolio. Anyway, the add method takes 4 arguments, boxId(id of the input we wish to change border color),
                tOrF(add positive or negative class),  and a the positive and negative class names. As you can see if tOrF is true we call the _render method from the
                object(this) and we put the positive class first. If false we put the negative class first. The order is important as we will see in the _render method the
                first class is the addClassName parameter which is the class that will be added while the second class is the removeClassName which will be removed.
              </p>

              <br /><br />

              <p>
                The remove method takes advantage of the add method by passing calling it twice but instead of including a class to add we leave it empty but include the
                classes to remove. This allows us to remove the classes but at the same time using existing code so we don’t have to write it again.
              </p>

              <br /><br />

              <p>
                Finally, let’s look at the create method. This is where the real magic happens. As you can see a values parameter is passed in. This will be an object of new methods
                and properties we want the new instance to have. So when we pass in the values object we loop over it with a for each adding each property to the new instance of
                addInputBoxColor object we created when we called var instance=Object.create(this). This method here says to go an create a new instance of this object. As we saw already
                this refers to the current object so in essence we are creating a new instance of our object but adding extra properties to it. Sound familiar? This then gives us an object
                that has all the properties of addInputBoxColor plus any new properties we want. So if we want to ‘inherit’ from this all we have to do is call the create method and pass in
                our new properties. Below is an example:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    var parent = addInputBoxColor.create();

    //child
    var child = parent.create({}
    newMethod: function(){},
    newProperty: 'new property'
    );

    //alert newProperty
    alert(child.newProperty); //alerts 'new property'

    //alert(parent.newProperty); --> This will fail because newProperty is a property of child not parent

    `}
                </pre>
              </div>

              <br /><br />

              <p>
                So as you can see using prototypal inheritance we can create objects that can ‘inherit’ from other objects who also use prototypal inheritance. It is also worth noting
                that es6 provides classes and the extends keyword which enables us to simply extend from another class and in essence removes the need to create a create method.
              </p>


            </div>
          </div>
      </div>
    )
  }
}
