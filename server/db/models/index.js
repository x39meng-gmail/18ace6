const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const UserConversation = require("./userConversation");

// associations
User.belongsToMany(Conversation, { through: UserConversation });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);
Conversation.belongsToMany(User, { through: UserConversation });
Conversation.hasMany(UserConversation);
User.hasMany(UserConversation);
UserConversation.belongsTo(User);
UserConversation.belongsTo(Conversation);

module.exports = {
  User,
  Conversation,
  Message,
  UserConversation,
};
