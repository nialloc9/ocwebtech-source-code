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
