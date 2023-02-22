// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
// const SEND_MESSAGE = 'SEND_MESSAGE';
// let store = {
//     _state: {
//         profilePage: {
//             posts:[
//                 {id: 1, post: 'Всем привет', likesCount: 12},
//                 {id: 2, post: 'Как дела у вас', likesCount: 13},
//                 {id: 3, post: 'ЕЕЕЕ', likesCount: 14},
//                 {id:4, post:"fkfkkf", likesCount: 15}
//             ],
//             newPostText: 'что-то'
//         },
//         dialogsPage:{
//             dialogsData: [
//                 {id: 1, name: 'Anechka'},
//                 {id: 2, name: 'Anastasiya'},
//                 {id: 3, name: 'Kris'}
//             ],
//             messagesData: [
//                 {id: 1, message: 'Привет'},
//                 {id: 2, message: 'Привет'},
//                 {id: 3, message: 'Как ты?'}],
//             newMessageBody: ''
//         }
    
//         },
//     _rerenderEntireTree() {},
//     _callSubscriber(){},
//     dispatch(action){
//         if (action.type === ADD_POST){
//                 let newPost ={
//                     id: 5,
//                     post: this._state.profilePage.newPostText,
//                     likesCount: 0
//                 };
                
//                 this._state.profilePage.posts.push(newPost);
//                 this._state.profilePage.newPostText = '';
//                 this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_NEW_POST_TEXT){
//             this._state.profilePage.newPostText = action.newText;
//             this._callSubscriber(this._state);
//         }
//         else if (action.type === UPDATE_NEW_MESSAGE_BODY){
//             this._state.dialogsPage.newMessageBody = action.body;
//             this._callSubscriber(this._state);
            
//         }
//         else if (action.type === SEND_MESSAGE){
//                 let body = this._state.dialogsPage.newMessageBody;
//                 this._state.dialogsPage.newMessageBody = '';
//                 this._state.dialogsPage.messagesData.push({id: 6, message: body});
//                 this._callSubscriber(this._state);
//         }
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state;
//     }
// }
// export const addPostActionCreator = () => ({type: ADD_POST})
// export const updateNewPostTextActionCreator = (text) => 
//     ({type: UPDATE_NEW_POST_TEXT, newText: text})
// export const sendMessageCreator = () => ({type: SEND_MESSAGE})
// export const updateNewMessageBodyCreator = (body) => 
//     ({type: UPDATE_NEW_MESSAGE_BODY, body: body})
// export default store;
// window.this._store = this._store;
    