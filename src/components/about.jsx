import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";

class About extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    // call database: axios.get(URL)
    const { data: books } = await http.get(config.apiEndpoint);
    this.setState({ books });
  }

  render() {
    return (
      <div className="div-background">
        <h1 className="h1-color" align="center">
          Meet the Team
        </h1>
        <div className="team-background ">
          <img
            className="team-pictures"
            src="https://avatars3.githubusercontent.com/u/47489147?s=460&u=9c0b0a16377b7c5ad8074eb1bfd79b2636e21ff3&v=4"
            alt="Luis"
          />
          <p className="text-title"> Luis Garcia</p>
        </div>
        <div className="team-background ">
          <img
            className="team-pictures"
            src="https://avatars2.githubusercontent.com/u/35883537?s=460&u=cc397349ab88ac9c6c75ffd98eabdffa30a48f3a&v=4"
            alt="Jose"
          />
          <p className="text-title"> Jose Ramos</p>
        </div>
        <div className="team-background ">
          <img
            className="team-pictures"
            src="https://avatars2.githubusercontent.com/u/49125411?s=460&u=aef3c6edc079fb7e16ded7bfa6e9597f53e9fa76&v=4"
            alt="Kim"
          />
          <p className="text-title"> Kim Wilkes</p>{" "}
        </div>
        <div className="team-background ">
          <img
            className="team-pictures"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQFQKsZlIPciuA/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=tWfZK4myDWhDAAo-Bl2OM_QGWf9xphK0j9Lrv53PlEk"
            alt="Wilson"
          />
          <p className="text-title"> Wilson Kameni</p>
        </div>
        <div className="team-background ">
          <img
            className="team-pictures"
            src="https://ca.slack-edge.com/T4YM57GF9-USBSXPKC1-b1422760fdc9-512"
            alt="Yosef"
          />
          <p className="text-title"> Yosef Tefera</p>
        </div>
      </div>
    );
  }
}
export default About;
