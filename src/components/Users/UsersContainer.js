import { connect } from "react-redux";
import Users from "./Users";
import {
  follow,
  getUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow
} from "../../redux/usersReducer";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress
  };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         follow: userId => dispatch(followAC(userId)),
//         unfollow: userId => dispatch(unfollowAC(userId)),
//         setUsers: users => dispatch(setUsersAC(users)),
//         setCurrentPage: pageNumber => dispatch(setCurrentPageAC(pageNumber)),
//         setTotalUsersCount: usersCount =>
//             dispatch(setTotalUsersCountAC(usersCount)),
//         toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching))
//     };
// };

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers
})(UsersContainer);
