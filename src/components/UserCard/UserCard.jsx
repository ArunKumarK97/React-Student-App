
import React from "react";

function UserCard(props) {
  return (
    <div className="card card-user">
      <div className="image">

      </div>
      <div className="content">
        <div className="author">
          <img
            className="avatar border-gray"
            src={props.avatar}
            alt="..."
          />
          <h4 className="title">
            {props.name}
            <br />
            <small>{props.userName}</small>
          </h4>
        </div>
        <p className="description text-center">{props.description}</p>
      </div>
      <hr />
      <div className="text-center">{props.socials}</div>
    </div>
  );
}

export default UserCard;
