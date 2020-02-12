import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  requestUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getIsFetching,
  getIsFollowingProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }

  onPageChanged = pageNumber => {
    const {pageSize} = this.props;
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          isFollowingProgress={this.props.isFollowingProgress}
        />
      </>
    );
  }
}


const mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    isFollowingProgress: getIsFollowingProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
  })
)(UsersContainer);
