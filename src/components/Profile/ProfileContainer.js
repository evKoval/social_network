import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID
      ? this.props.match.params.userID
      : 5723;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

let withUrlDataComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { setUserProfile })(
  withUrlDataComponent
);
