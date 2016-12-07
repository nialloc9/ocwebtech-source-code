import React from 'react'

export default class Sql extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/languageSql.png" className="portfolio_block_image_summary" alt="Picture of database"/>
              </div>
              <br /><br />

              <p>
                SQL or structured query language is used to communicate with a database. It is used to do things such as SELECT, UPDATE, DELETE, and
                DROP data from a database. Initially created in the 1970’s it is used the world over for managing databases. Queries and other SQL
                operations take the form of written statements using words such as INSERT AND CREATE.
              </p>

              <br /><br />

              <p>
                Each column in a database refers to a category of data and each row contains a data value for the intersecting column. For me, I have
                used SQL extensively for sites such as iGoalo.com to handle interactions with the database. An example of this is for handling the friendships and
                group members in iGoalo.
              </p>

          </div>
      </div>
    )
  }
}
