import React, { Component } from "react";
import config from "../config.json";
import http from "../services/httpService";
import Profile from "./profile";

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
      <div>
        <h1>Meet The Team</h1>
        <div className="div-background">
          <div className="ui link cards">
            <Profile
              src="https://avatars3.githubusercontent.com/u/47489147?s=460&u=9c0b0a16377b7c5ad8074eb1bfd79b2636e21ff3&v=4"
              name="Luis Garcia"
              linkInUrl="https://www.linkedin.com/in/luisjgarcia010/"
              description="Computer Science student at Bunker Hill Community College"
            />
            <Profile
              src="https://avatars2.githubusercontent.com/u/35883537?s=460&u=cc397349ab88ac9c6c75ffd98eabdffa30a48f3a&v=4"
              name="Jose Ramos"
              linkInUrl=""
              description="Computer Science student "
            />
            <Profile
              src="https://avatars2.githubusercontent.com/u/49125411?s=460&u=aef3c6edc079fb7e16ded7bfa6e9597f53e9fa76&v=4"
              name="Kim Wilkes"
              linkInUrl=""
              description="Computer Science student "
            />
            <Profile
              src="https://ca.slack-edge.com/T4YM57GF9-USBSXPKC1-b1422760fdc9-512"
              name="Yosef Tefera"
              linkInUrl=""
              description="Computer Science student "
            />
            <Profile
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFQKsZlIPciuA/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=tWfZK4myDWhDAAo-Bl2OM_QGWf9xphK0j9Lrv53PlEk"
              name="Wilson Kameni"
              linkInUrl=""
              description="Computer Science student "
            />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
