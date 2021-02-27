import React, { useEffect, useState } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "components/Card/Card";
import Button from "components/CustomButton/CustomButton";
import 'react-bootstrap-multiselect/css/bootstrap-multiselect.css';
import Multiselect from 'react-bootstrap-multiselect';
import { ROOT_URL } from 'variables/Variables';

function Message(props) {

  const [phoneNumbers, setPhoneNumbers] = useState([]);

  useEffect(() => {
    (async function getList() {
      try {
        let response = await fetch(`${ROOT_URL}/api/getPhoneNumbers`);//To Get PhoneNumbers
        let jsonData = await response.json();

        let phone = [];
        jsonData.forEach(element => {
          phone.push({ value: element });
        });
        setPhoneNumbers(phone);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const sendMessage = () => {
    alert("Message Sent Successfully");
    window.location.reload();
  };

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Write New Message"
              content={
                <div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3">
                      <span>Title</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9">
                      <input className="form-control" ></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3">
                      <span>Recipient</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9">
                      <Multiselect data={phoneNumbers} multiple />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9">
                      <label><input type='checkbox'></input> Send All Recipients</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3">
                      <span>Message</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9">
                      <textarea rows="5" className="form-control" ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-2 col-md-offset-7">
                      <Button bsStyle="primary" fill pullRight onClick={sendMessage}>Send</Button>
                    </div>
                  </div>

                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Message;