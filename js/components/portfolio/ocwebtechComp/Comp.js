import React from 'react'

export default class Comp extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/ocwebtech/jigsaw.jpg" className="portfolio_block_image_summary" alt="jigsaw image"/>
              </div>
              <br /><br />

              <p>
                ReactJS is an open source JavaScript library that is maintained by a community that includes Facebook and Instagram. It is used to
                provide a view for data rendered as HTML. Because it is concerned with the view it is sometimes referred to as just the V in MVC
                (Model View Controller). ReactJs is used by some truly huge companies such as AirBnb and Netflix.
              </p>

              <br /><br />

              <p>
                ReactJs uses one way data flow in that it passes data down to components renderers that output the data in html tags.  A component cannot directly
                modify this data and is therefore immutable. However, callback functions can also be passed down to these ‘dumb’ components that will allow the
                data to be modified. This can be referred to as properties down, actions up.
              </p>

              <br /><br />

              <p>
                One of the most awesome features of ReactJs is the virtual DOM. This is really cool in that react creates a JavaScript representation of the DOM
                called the virtual DOM. It compares this virtual DOM with the real DOM and instead of updating the entire real DOM it only updates the sub-components
                that change. React components are typically wrote in JSX which is a JavaScript extension syntax that allows. This looks like HTML tags but
                enforce stricter rules than conventional HTML. An example of this is the closing of tags.
              </p>
              <br /><br />

              <p>
                Let’s look at one of these components from OCWebTech. The component we will look at is called FifthBlock and it is the portfolio images at the bottom
                of the landing page for OCWebTech. The landing page is separated into five blocks which are all their own components that receive their props from
                the LandingPage container (smart component) which receives the data from the redux store which we will discuss later.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
    {`
      import React from 'react'
  import {Link} from 'react-router'

  export default class FifthBlock extends React.Component{

  //render
  render(){

  //destructure store
  const { images, title } = this.props.store

  return(
  <div class="block5_wrapper">
      <div class="block5">
          <div class="row">
              <div class="col-sm-12">
                  <h1 class="block5_main_area_title">Portfolio</h1>
                  <div class="block5_main_area_wrapper">
                      <div class="block5_main_body">
                          <div class="portfolio1">
                              <div class="portfolio_image_wrapper">
                                  <Link to={images.first.link}><img class="portfolio_image" src={images.first.src} alt={images.first.alt}/></Link>
                              </div>

                              <div class="portfolio_image_wrapper">
                                  <Link to={images.second.link}><img class="portfolio_image" src={images.second.src} alt={images.second.alt}/></Link>
                              </div>

                              <div class="portfolio_image_wrapper">
                                  <Link to={images.third.link}><img class="portfolio_image" src={images.third.src} alt={images.third.alt}/></Link>
                              </div>

                              <div class="portfolio_image_wrapper">
                                  <Link to={images.fourth.link}><img class="portfolio_image" src={images.fourth.src} alt={images.fourth.alt}/></Link>
                              </div>

                              <div class="portfolio_image_wrapper">
                                  <Link to={images.fifth.link}><img class="portfolio_image" src={images.fifth.src} alt={images.fifth.alt}/></Link>
                              </div>

                              <div class="portfolio_image_wrapper">
                                  <Link to={images.sixth.link}><img class="portfolio_image" src={images.sixth.src} alt={images.sixth.alt}/></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
  }
  }
    `}
                </pre>
              </div>

              <br /><br />

              <p>
                As we can see from above the component is receiving the data that is being inputted into the HTML tags from the props which are passed
                down to the component from another component. To create this component we import the React class from react so we can extend the
                React.Component class. This tells react that it is a component and to treat it as one. Next we imported Link from react-router. This
                is used to navigate around our site by changing the URL which will change the page. We need to wrap our images with the Link tags if
                we want it to change pages when the user clicks on the image. It’s important to note that the Router must be set up correctly or else
                we will get an error message such as cannot find route.
              </p>

              <br /><br />

              <p>
                Now we output our component using the render method which renders our JSX code to the screen. Next we can see one of the most awesome and convenient
                additions from es6 to JavaScript. That is the restructuring of objects. This works by taking our child objects out of the parent. So inside the
                object store that was passed by the parent component as a property are two child objects images and title. Since we know the names of these objects
                we can destructure the store and now call our child objects using their names. We return the JSX HTML code that we want outputted by the component.
              </p>

              <br /><br />

              <p>
                This use of components and especially dumb and smart components makes a react application really easy to manage and test if something goes wrong.
                There are so many more awesome things about react we could discuss here such as the react-router or containers but this is just an example of
                OCWebTech’s use of React components.
              </p>

              <br /><br />
            </div>
          </div>
      </div>
    )
  }
}
