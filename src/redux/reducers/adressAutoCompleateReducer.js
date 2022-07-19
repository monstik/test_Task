const SET_ADDRESSES = 'SET_ADDRESSES';

export function adressAutoCompleateReducer(state = { addresses: [] }, action) {
  switch (action.type) {
    case SET_ADDRESSES:
      return { ...state, addresses: [...action.payload] };

    default:
      return state;
  }
}

export const setAddressesAction = payload => ({ type: SET_ADDRESSES, payload });
