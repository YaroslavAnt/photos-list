import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MyPhoto extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <Link to="/">
        <img src={this.props.newSrc} alt="hgjjg" style={{ width: "100%" }} />
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return { newSrc: state.src };
};

export default connect(mapStateToProps)(MyPhoto);
