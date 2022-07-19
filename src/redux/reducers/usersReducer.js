const ADD_NEW_USER = 'ADD_NEW_USER';

export function usersReducer(state = { users: [] }, action) {
  switch (action.type) {
    case ADD_NEW_USER:
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
}

export const addUserAction = user => ({ type: ADD_NEW_USER, payload: user });
