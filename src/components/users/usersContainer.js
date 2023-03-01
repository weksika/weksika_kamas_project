import { connect } from "react-redux";
import { follow } from "../../redux/users-reducer";
import { unfollow } from "../../redux/users-reducer";
import { setUsers } from "../../redux/users-reducer";
import { setCurrentPage} from "../../redux/users-reducer";
import { setTotalUsersCount } from "../../redux/users-reducer";
import { setIsFetching } from "../../redux/users-reducer";
import UsersAPIComponent from "./usersAPIComponent";
let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
//  let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }

//     }
//  }
export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, 
    setTotalUsersCount, setIsFetching})(UsersAPIComponent);;