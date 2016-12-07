import React from 'react'

import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'


export default class ContactImage extends React.Component{

  constructor() {
    super()
    this.state = {
      showModal: false,
      info: ""
    };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  submitClick(){
    const self = this;

    const { name , email, message } = this.refs;

    const na = name.value
    const em = email.value
    const me = message.value

    const params = { name: na, email: em, message: me }

    axios({
			url: "php/send_email.php",
			timeout: 20000,
			method: 'get',
      params: params
		})
			.then(function(response) {
				self.setState({ info: "Email sent." })
			})
			.catch(function(response){
        self.setState({ info: "Oops something went wrong.." })
			})
  }

  render(){
    return(
      <div>
        <img onClick={this.open.bind(this)} src="../../../resources/images/email.jpg" alt="email link" className="logo_images"/>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="#" method="post">
                <div class="form-group">
                    <label for="name" class="col-sm-4 control-label">
                        Name:
                    </label>
                    <div class="col-sm-8">
                        <input type="text" name="name" maxLength="255" class="form-control" placeholder="John Smith" ref="name"/>
                    </div>
                    <br /><br />
                    <label for="email" class="col-sm-4 control-label">
                        Email:
                    </label>
                    <div class="col-sm-8">
                        <input type="email" name="email" maxLength="255" class="form-control" placeholder="JSmith@example.com" ref="email"/>
                    </div>
                    <br /><br />
                    <label for="message" class="col-sm-4 control-label">
                        Message:
                    </label>
                    <div class="col-sm-8">
                        <textarea name="message" maxLength="255" class="form-control" placeholder="Questions and suggestions are super awesome." ref="message"></textarea>
                    </div>
                    <br /><br />
                    <p id="send_email_info">{this.state.info}</p>
                </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" class="btn btn-success" id="send_message" onClick={this.submitClick.bind(this)} value="Send"/>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}
