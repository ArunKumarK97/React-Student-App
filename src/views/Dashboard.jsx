
import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card";
import StatsCard from "components/StatsCard/StatsCard";
import {
  dataPie,
  legendPie, ROOT_URL
} from "variables/Variables.jsx";

function Dashboard(props) {

  const createLegend = (json) => {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    (async function getList() {
      try {
        let response = await fetch(`${ROOT_URL}/api/studentList`);
        let jsonData = await response.json();
        setStudentCount(jsonData.length);
      } catch (error) {
        console.log(error);
      }
    })();

  }, []);

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col lg={4} sm={6} onClick={() => props.history.push("/admin/studentList")}>
            <StatsCard
              bigIcon={<i className="pe-7s-users text-warning" />}
              statsText="Students"
              statsValue={studentCount} />
          </Col>
          <Col lg={4} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-wallet text-success" />}
              statsText="Revenue"
              statsValue="₹1,34,500" />
          </Col>
          <Col lg={4} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-user-female text-info" />}
              statsText="Teachers"
              statsValue="23" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Card
              title="Fees Collections & Expenses"
              content={
                <div
                  id="chartPreferences"
                  className="ct-chart ct-perfect-fourth"
                >
                  <ChartistGraph data={dataPie} type="Pie" />
                </div>
              }
              legend={
                <div className="legend">{createLegend(legendPie)}</div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Dashboard;
