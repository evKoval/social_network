import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID
      ? this.props.match.params.userID
      : 5723;
    this.props.getUserProfile(userID);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

let withUrlDataComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  withUrlDataComponent
);
