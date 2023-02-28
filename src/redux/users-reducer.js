const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map( u => {
                    let a = u.id === action.userId;
                    if(a){
                        console.log(action.userId);
                        return {...u, followed: true}
                        
                    }
                    return u;
                    
                })}
        
        case UNFOLLOW:{
            return {
                ...state, 
                users: state.users.map( u => {
                    let a = u.id === action.userId;
                    if(a){
                        return {...u, followed: false}
                    }
                    return u;
                })}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;