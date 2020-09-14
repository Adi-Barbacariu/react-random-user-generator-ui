import React from "react";
import InfoBtn from "./InfoBtn";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentData: "" };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(data) {
    this.setState({ currentData: data });
  }

  render() {
    if (this.props.data) {
      var name = { data: this.props.data.name, intro: "Hi, My name is" };
      var email = { data: this.props.data.email, intro: "My email address is" };
      var phone = { data: this.props.data.phone, intro: "My phone number is" };
      var address = { data: this.props.data.address, intro: "My address is" };
      var birthday = {
        data: this.props.data.birthday,
        intro: "My birthday is",
      };
    } else {
      name = { data: "David Beckham", intro: "Hi, My name is" };
      email = { data: "david@beckham.com", intro: "My email address is" };
      phone = { data: "555-555-5555", intro: "My phone number is" };
      address = { data: "Manchester, England", intro: "My address is" };
      birthday = { data: "10/10/1980", intro: "My birthday is" };
    }
    return (
      <div className="container">
        <div className="user__photo"></div>
        <div className="user__info">
          <p className="user__info--intro">{this.state.currentData.intro}</p>
          <p className="user__info--main">{this.state.currentData.data}</p>
        </div>
        <div className="user__buttons">
          <ul>
            <InfoBtn key="1" data={name} handleHover={this.handleHover}>
              Name
            </InfoBtn>
            <InfoBtn key="2" data={email} handleHover={this.handleHover}>
              Email
            </InfoBtn>
            <InfoBtn key="3" data={phone} handleHover={this.handleHover}>
              Phone
            </InfoBtn>
            <InfoBtn key="4" data={address} handleHover={this.handleHover}>
              Address
            </InfoBtn>
            <InfoBtn key="5" data={birthday} handleHover={this.handleHover}>
              Birthday
            </InfoBtn>
          </ul>
        </div>
      </div>
    );
  }
}
