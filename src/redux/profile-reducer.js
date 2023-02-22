const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        {id: 1, post: 'Всем привет', likesCount: 12},
        {id: 2, post: 'Как дела у вас', likesCount: 13},
        {id: 3, post: 'ЕЕЕЕ', likesCount: 14},
        {id:4, post:"fkfkkf", likesCount: 15}
    ],
    newPostText: 'что-то'
};

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost ={
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
            return  {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;