import React from 'react'

export default class Redux extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/ocwebtech/redux.png" className="portfolio_block_image_summary" alt=" image"/>
              </div>
              <br /><br />

              <p>
                Before deciding on creating the site using Redux to manage the state of the application flux was also looked at and tested. If you wish to
                look at the same app made in  both please look at the two examples of a todo app that were created to help decide on which to use:
              </p>

              <br /><br />

              <p>
                Flux Todo App Source Code: <a href="https://github.com/nialloc9/reactJsTodoWithFlux">GitHub</a><br />
                Redux Todo App Source Code: <a href="https://github.com/nialloc9/reactJsTodoWithRedux">GitHub</a>
              </p>

              <br /><br />

              <p>
                Redux uses a new instance of state to make use of immutable state. Immutable data is data that does not mutate (change). We do this
                by every time the data (store) changes creating a new object and using it instead with the old data and new data inside. So if we do
                something and there is a problem with still have the old state available to us.
              </p>

              <br /><br />

              <p>
                The complicated part about redux is when you look on github you will see example code and you will see a lot of moving components and it's hard to
                figure out what is making these change. Redux is actually not react or a plugin for react. It is its own application used for handling state that
                just happens to work awesomely well with react.
              </p>

              <br /><br />

              <p>
                To create a redux store you basically need a reducer and a store. When we subscribe to a store we are listening for changes in that store.
                Also when we create a store we must pass it a reducer that takes 2 arguments state and action. Reducers are used to handle actions.
              </p>

              <br /><br />

              <p>
                We can actually put our reducers in separate files to handle separate parts of the store. We combine these using combineReducers
                (from redux) inside a separate file that we can then import and pass into createStore(); These reducers have to return something.
                If they don’t we will get errors. We can also take our default state out of the createStore and put inside our reducers now:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    const userReducer=(state={defaultState}, actions)=>{}
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                Remember with redux we want to always return new state objects because otherwise if we change the data once and then print it out and then
                another component goes and gets the state and mutates it both will be the same even if we don't want it to be. An example of this would be
                a user registration form. Default value to be put in the form fields to give examples to the user but we want this data to override each
                time or else when a user name Dave signs up and Tim signs up after both users would be called Tim as Tim overrode Dave. We need new state
                objects each time which include the old state and adds the new state. Now we have a history of the state and can go back for debugging
                purposes and check. Remember to always put the old data to go into the new state first in case we want to override it. The beauty of redux
                is that the user reducer is not aware of the statuses part of the store and statuses part is not aware of the user part so they can handle
                different parts. But the statuses reducer can listen for CHANGE_NAME still and do something if that action occurs.
              </p>

              <br /><br />

              <p>
                So let’s look at how we used redux inside OCWebTech for our FifthBlock component that we saw earlier. It’s important to note some of this code
                has been altered to remove code that is not relevant to the points being discussed. Let’s look at the reducer first:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    to the points being discussed. Let’s look at the reducer first:
export default function landingPage(state= {
  fifthblock: {
    images: {
      first: {
        link: "/portfolio/igoalo",
        src: "../../resources/images/projects/igoalo/home_page.png",
        alt: "link to igoalo project",
      },
      second: {
        link: "/portfolio/ocwebtech",
        src: "",
        alt: "link to ocwebtech project",
      },
      third: {
        link: "/portfolio/javascript",
        src: "../../resources/images/projects/listMaker/addAnItem.png",
        alt: "link to javascript projects",
      },
      fourth: {
        link: "/portfolio/java",
        src: "../../resources/images/projects/JavaGame/newGame.png",
        alt: "link to java projects",
      },
      fifth: {
        link: "/portfolio/php",
        src: "../../resources/images/projects/captcha/checkBtnInputWrongNumber.png",
        alt: "link to php projects",
      },
      sixth: {
        link: "/portfolio/other",
        src: "",
        alt: "link to other projects",
      },
    }
  }
}, action){
  return state
}
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                So this reducer is called landingPage and it holds our fithbllock part of the store. This is then imported into another file that combines all the
                reducers together that is added to the store. If any of this data is altered than the fifthblock component will re-render because it is dependent
                on this data.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    import { combineReducers } from "redux"

    import navBar from './navBarReducer'
    import landingPage from './landingPageReducer'

    export default combineReducers({
      navBar,
      landingPage,
    })
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                As you can see from above we have two reducer’s navBar and landingPage that are combined and exported to the store:
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
  {`
    import { createStore } from 'redux'
    import promise from 'redux-promise-middleware'

    import reducers from './reducers'


    export default createStore(reducer)

  `}
                </pre>
              </div>

              <br /><br />

              <p>
                When we connect to the store from our containers (smart components) we create a new instance of the state that is then passed down to our dumb
                components to output. So the important thing to note is that there is one store with multiple reducers and that each time we connect to the
                store we are creating a new instance of the state that is in the store.
              </p>

              <br /><br />

              
            </div>
          </div>
      </div>
    )
  }
}
