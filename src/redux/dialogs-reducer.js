const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Anechka'},
        {id: 2, name: 'Anastasiya'},
        {id: 3, name: 'Kris'}
    ],
    messagesData: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет'},
        {id: 3, message: 'Как ты?'}]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
        return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;