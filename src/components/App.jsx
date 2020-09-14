import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import User from "./User";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    try {
      const response = await fetch("https://randomuser.me/api/");

      const data = await response.json();

      const userData = {
        pic: data.results[0].picture.thumbnail,
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        email: data.results[0].email,
        phone: data.results[0].phone,
        address: `${data.results[0].location.city}, ${data.results[0].location.country}`,
        birthday: data.results[0].dob.date,
      };

      this.setState({ user: userData });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (
      <div className="app">
        <Header handleClick={this.handleClick}>
          <User data={this.state.user} />
        </Header>
        <Footer />
      </div>
    );
  }
}
