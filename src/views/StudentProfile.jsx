import React, { useEffect, useState } from "react";
import {
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { ROOT_URL } from "variables/Variables";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "components/Card/Card";
import Button from "components/CustomButton/CustomButton";
import avatar from "assets/img/default-avatar.png";
import UserCard from "components/UserCard/UserCard";

function StudentsInfo(props) {
  let student = props.location.state ? props.location.state.student : null;
  const [actionText, setActionText] = useState("Save Profile");

  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [section, setSection] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [attendance, setAttendance] = useState("");

  useEffect(() => {
    if (student) {
      setName(student.name);
      setRoll(student.roll);
      setGender(student.gender);
      setDob(student.dob);
      setStudentClass(student.studentClass);
      setSection(student.section);
      setAddress(student.address);
      setPhone(student.phone);
      setAttendance(student.attendance);
      setActionText("Update Profile");
    }
  }, [student]);

  const exit = () => {
    props.history.goBack();
  }

  const saveUpdate = () => {
    if (name === "") {
      alert("Enter Name");
      return;
    }
    if (gender === "") {
      alert("Enter Gender");
      return;
    }
    if (dob === "") {
      alert("Enter dob");
      return;
    }
    if (roll === "") {
      alert("Enter RollNO");
      return;
    }
    if (studentClass === "") {
      alert("Enter studentClass");
      return;
    }
    if (section === "") {
      alert("Enter Section");
      return;
    }
    if (address === "") {
      alert("Enter Address");
      return;
    }
    if (phone === "") {
      alert("Enter Phone No");
      return;
    }
    let data = {
      roll: roll,
      name: name,
      gender: gender,
      dob: dob,
      studentClass: parseInt(studentClass),
      section: section,
      address: address,
      phone: phone,
      attendance: attendance
    }
    setActionText("Loading...")
    if (student) {
      update(data);
    } else {
      save(data);
    }

  }

  async function save(object) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
      };

      let response = await fetch(`${ROOT_URL}/api/createStudent`, requestOptions); //To Create Student
      if (response.status === 201) {
        alert("Saved Successfully");
        exit();
      } else {
        alert("Action Failed");
      }
      setActionText("Save Profile")
    } catch (error) {
      console.log(error);
    }
  }
  async function update(object) {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
      };

      let response = await fetch(`${ROOT_URL}/api/studenUpdate/` + student.id, requestOptions);//To Update Student
      if (response.status === 200) {
        alert("Updated Successfully");
        exit();
      } else {
        alert("Action Failed");
      }
      setActionText("Update Profile")
    } catch (error) {
      console.log(error);
    }
  }
  async function Delete() {
    try {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      };

      let response = await fetch(`${ROOT_URL}/api/studentDelete/` + student.id, requestOptions);//To Delete Student
      if (response.status === 200) {
        alert("Deleted Successfully");
        exit();
      } else {
        alert("Action Failed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="content">
      <Grid fluid>
        <Row>
          <Col md={8}>
            <Card
              title="Student Profile"
              content={
                <div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Name</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input className="form-control" value={name || ""} onChange={(event) => setName(event.currentTarget.value)}></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Gender</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <div className="radio-group">
                        <label><input type="radio" name="gender" className="radio-inline" value="Male" checked={gender === "Male"} onChange={(event) => setGender(event.currentTarget.value)} /> Male</label>
                        <label><input type="radio" name="gender" className="radio-inline" value="Female" checked={gender === "Female"} onChange={(event) => setGender(event.currentTarget.value)} /> Female</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>DOB</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input type="date" className="form-control" value={dob || ""} onChange={(event) => setDob(event.currentTarget.value)}></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Roll Number</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input className="form-control" value={roll || ""} onChange={(event) => setRoll(event.currentTarget.value)}></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Class</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input className="form-control" value={studentClass || ""} onChange={(event) => setStudentClass(event.currentTarget.value)}></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Section</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input className="form-control" value={section || ""} onChange={(event) => setSection(event.currentTarget.value)}></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Address</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input className="form-control" value={address || ""} onChange={(event) => setAddress(event.currentTarget.value)}></input>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Phone</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input className="form-control" value={phone || ""} onChange={(event) => setPhone(event.currentTarget.value)}></input>
                    </div>
                  </div>

                  {student && <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                      <span>Attendance %</span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                      <input className="form-control" value={attendance || ""} onChange={(event) => setAttendance(event.currentTarget.value)}></input>
                    </div>
                  </div>}

                  <div className="row">
                    <div className={"col-xs-12 col-sm-12 col-md-3" + (student ? " col-md-offset-5" : " col-md-offset-7")}>
                      <Button bsStyle="primary" fill pullRight type="submit" onClick={saveUpdate} disabled={actionText === "Loading..."} >{actionText}</Button>
                    </div>
                    {student && <div className="col-xs-12 col-sm-12 col-md-2">
                      <Button bsStyle="primary" style={{ marginLeft: "10px" }} fill pullRight onClick={() => Delete()}>Delete</Button>
                    </div>}
                    <div className="col-xs-12 col-sm-12 col-md-2">
                      <Button bsStyle="primary" style={{ marginLeft: "10px" }} fill pullRight onClick={exit}>Exit</Button>
                    </div>
                  </div>
                </div>
              }
            />
          </Col>
          <Col md={4}>
            <UserCard
              avatar={avatar}
              name={((props.location.state && props.location.state.student) != null ? props.location.state.student.name : '')}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default StudentsInfo;