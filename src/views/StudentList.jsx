
import React, { useEffect, useState } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card";
import { thArray, ROOT_URL } from "variables/Variables";
import Button from "components/CustomButton/CustomButton";
import "bootstrap/dist/css/bootstrap.min.css";

function StudentList(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async function getList() {
      try {
        let response = await fetch(`${ROOT_URL}/api/studentList`);// To Get Student List
        let jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    })();

  }, []);

  const showProfile = (obj) => {
    props.history.push("/admin/Info", { student: obj });
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Card
              title="Student List"
              ctTableResponsive
              content={
                <div>
                  <Row>
                    <Col md={2} mdOffset={10}>
                      <Button bsStyle="primary" pullRight fill onClick={() => props.history.push("/admin/Info")}>Add Profile</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="datatable-container">
                        <Table bordered hover responsive className="datatable">
                          <thead>
                            <tr>
                              {thArray.map((prop, key) => {
                                return <th key={key}>{prop}</th>;
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.map((tableData, key) => {
                                const { roll, name, gender, dob, studentClass, section, address, phone } = tableData
                                return (
                                  <tr key={key} onClick={() => showProfile(tableData)}>
                                    <td>{roll}</td>
                                    <td>{name}</td>
                                    <td>{gender}</td>
                                    <td>{dob}</td>
                                    <td>{studentClass}</td>
                                    <td>{section}</td>
                                    <td>{address}</td>
                                    <td>{phone}</td>
                                  </tr>
                                )
                              })
                            }
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default StudentList;
