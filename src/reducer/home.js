import {
  LIST_PG,
  BOOK_MY_ROOM
} from '../action/types';

const initialState = {
 listpg:{},
 bookmyroom:[]
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case LIST_PG:
      return {...state, listpg: action.payload};
    case BOOK_MY_ROOM:
      return {...state, bookmyroom: action.payload};
    default:
      return state;
  }
}
