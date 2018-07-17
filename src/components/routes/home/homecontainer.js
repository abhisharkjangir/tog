// ====================================
// CONSTANTS
// ====================================

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET_COUNTER = "RESET_COUNTER";
const SET_USERS = "SET_USERS"

// ====================================
// SYNC & ASYNC ACTIONS
// ====================================

// Increment
const increment = () => {
  return {
    type : INCREMENT,
    payload : 1
  };
};

// Decrement
const decrement = () => {
  return {
    type : DECREMENT,
    payload : -1
  };
};

// Reset counter
const resetcounter = () => {
  return {
    type : RESET_COUNTER
  };
};

const setUsers = (users) => {
  return {
    type : SET_USERS,
    payload : users
  }
}

// ====================================
// INITIAL STATE
// ====================================

const initialState = {};

// ====================================
// REDUCER : Default Export
// ====================================

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({},state, {counter : state.counter + action.payload});
    case DECREMENT:
      return Object.assign({},state, {counter : state.counter + action.payload});
    case RESET_COUNTER:
      return Object.assign({},state, {counter : 0});
    case SET_USERS:
      return Object.assign({},state, {users : action.payload})
    default:
      return state;
  }
};

// ====================================
// STATE & DISPATCH MAPPING
// ====================================

export const mapDispatchToProps = (dispatch) => {
  return {
    increment : () => dispatch(increment()),
    decrement : () => dispatch(decrement()),
    resetcounter : () => dispatch(resetcounter()),
    setUsers : (users) => dispatch(setUsers(users))
  };
};

export const mapStateToProps = (state) => {
  return {
    home: state.home
  };
};
