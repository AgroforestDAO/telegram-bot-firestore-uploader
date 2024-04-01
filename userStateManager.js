// userStateManager.js

const userStates = {};

function getUserState(userId) {
 return userStates[userId] || { stage: 'start' };
}

function setUserState(userId, state) {
 userStates[userId] = state;
}

function resetUserState(userId) {
 delete userStates[userId];
}

module.exports = { getUserState, setUserState, resetUserState };
