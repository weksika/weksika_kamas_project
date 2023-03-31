import { usersAPI, profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
let initialState = {
    posts:[
        {id: 1, post: 'Всем привет', likesCount: 12},
        {id: 2, post: 'Как дела у вас', likesCount: 13},
        {id: 3, post: 'ЕЕЕЕ', likesCount: 14},
        {id:4, post:"fkfkkf", likesCount: 15}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost ={
                id: 5,
                post: action.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_STATUS:{
            return {...state, status: action.status}
        }
        case SET_USER_PROFILE:{
                return {...state, profile: action.profile}
        }
        
        
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if(!response.data.resultCode){
        dispatch(setStatus(status));
    }
}
export default profileReducer;