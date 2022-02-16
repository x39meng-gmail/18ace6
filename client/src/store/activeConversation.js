const SET_ACTIVE_CHAT = "SET_ACTIVE_CHAT";

export const setActiveChat = (otherUser) => {
  return {
    type: SET_ACTIVE_CHAT,
    otherUser,
  };
};

const reducer = (state = "", action) => {
  switch (action.type) {
    case SET_ACTIVE_CHAT: {
      return { ...action.otherUser };
    }
    default:
      return state;
  }
};

export default reducer;
