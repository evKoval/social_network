const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Chuck" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Evgeny" },
    { id: 5, name: "Bob" }
  ],
  messages: [
    { id: 1, message: "message1" },
    { id: 2, message: "message2" },
    { id: 3, message: "message3" },
    { id: 4, message: "message4" }
  ],
  newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageBodyActionCreator = currentText => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: currentText
});
