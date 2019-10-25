export default function message(state = [], action = {}) {
  console.log("Reducer", state, "Action", action.type, "Data payload", action.payload);
  switch (action.type) {
    case 'ADD_MESSAGES':
      return action.payload
    default:
      return state;
  }
}