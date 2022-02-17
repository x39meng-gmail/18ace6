import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  receiveOtherHasRead,
} from "./store/conversations";
import { clearUnreadConversation } from "./store/utils/thunkCreators";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id) => {
    store.dispatch(addOnlineUser(id));
  });

  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => {
    store.dispatch(setNewMessage(data.message, data.sender, false));
    const state = store.getState();
    if (state.activeConversation.id === data.message.senderId) {
      store.dispatch(clearUnreadConversation(data.message.conversationId));
    }
  });
  socket.on("notify-read", (conversationId) => {
    store.dispatch(receiveOtherHasRead(conversationId));
  });
});

export default socket;
