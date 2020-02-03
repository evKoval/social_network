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
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: action.newMessageBody }]
      };

    default:
      return state;
  }
};

export default dialogsReducer;
export const sendMessageActionCreator = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
});
