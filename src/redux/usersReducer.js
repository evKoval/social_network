const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, isFollowed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, isFollowed: false };
          }
          return u;
        })
      };

    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNumber
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    default:
      return state;
  }
};
export const followAC = userID => ({ type: FOLLOW, userID });
export const unfollowAC = userID => ({ type: UNFOLLOW, userID });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setCurrentPageAC = pageNumber => ({
  type: SET_CURRENT_PAGE,
  pageNumber
});
export const setTotalUsersCountAC = usersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  usersCount
});
export const toggleIsFetchingAC = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export default usersReducer;
