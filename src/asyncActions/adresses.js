import axios from 'axios';
import { setAddressesAction } from '../redux/reducers/adressAutoCompleateReducer';




export function fetchAddresses(value) {
  return async function fetchAddressesThunk(dispatch) {
    const response = await axios.get(
      `https://autocomplete.search.hereapi.com/v1/autocomplete?apiKey=yIQ4tm2jWd5CC17UbiuK22MaPtb_Zlfm-IkGDfITy18&q=${value}`
    );
     dispatch(setAddressesAction(response.data.items));
  };
}