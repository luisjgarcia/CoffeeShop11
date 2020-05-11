import React from "react";

const Profile = (props) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={props.src} />
      </div>
      <div className="content">
        <a className="header">{props.name}</a>
        <div className="meta">
          <span className="date">
            {" "}
            <a href={props.linkInUrl}>LinkedIn Account</a>{" "}
          </span>
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
};

export default Profile;
